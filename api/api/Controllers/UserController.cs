using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Infrastructure;
using api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly Activities _activities = new Activities();

        public UserController(ApplicationDbContext context)
        {
            _context = context;
            _context.Activities.Load();
        }


        [HttpGet("Admin")]
        public async Task<List<User>> GetAdminUsersAsync()
        {
            var users = await _context.Users.Where(x => x.Role == "Administrator").ToListAsync();
            return users;
        }

        [HttpGet("Player")]
        public async Task<List<User>> GetPlayerUsersAsync()
        {
            var users = await _context.Users.Where(x => x.Role == "Player").ToListAsync();
            users = users.OrderByDescending(x => x.FirstName).ToList();
            users.ForEach(user => {
                if(user.ActivityList == null) {
                    user.ActivityList = new List<Activity>();
                }
            });
            return users;
        }

        [HttpGet("Player/{id}")]
        public async Task<User> GetPlayerUsersByIdAsync(string id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            if(user.ActivityList == null) {
                user.ActivityList = new List<Activity>();
            }
            return user;
        }

        [HttpPost("Create")]
        public async Task<User> CreatePlayer([FromBody] UserRequest newUser)
        {
            var user = new User()
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                Role = "Player",
                ActivityList = new List<Activity>()
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        [HttpPost("Update")]
        public async Task<User> UpdatePlayer([FromBody] User updatedUser)
        {
            var user = await  _context.Users.FirstOrDefaultAsync(x => x.Id == updatedUser.Id);
            user.FirstName = updatedUser.FirstName;
            user.LastName = updatedUser.LastName;
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
            if(user.ActivityList == null) {
                user.ActivityList = new List<Activity>();
            }
            return user;
        }

        

        [HttpDelete("Delete/{id}")]
        public async Task<bool> DeletePlayer(string id)
        {
            _context.Remove(_context.Users.FirstOrDefault(x => x.Id == id));
            try
            {
                await _context.SaveChangesAsync();
                return true;
            } catch (Exception ex)
            {
                return false;
            }
        }

        [HttpPost("Player/{id}/Activity")]
        public async Task<User> AddActivity(string id, [FromBody] Activity activity)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            if(user != null) {
                if(user.ActivityList == null)
                {
                    user.ActivityList = new List<Activity>();
                }
                activity.Id = Guid.NewGuid().ToString();
                user.ActivityList.Add(activity);
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
            }
            return user;
        }

        [HttpDelete("Player/{id}/Activity/{activityId}")]
        public async Task<User> DeleteActivity(string id, string activityId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            if(user != null && user.ActivityList != null) {
                var activity = user.ActivityList.FirstOrDefault(x => x.Id == activityId);
                if(activity != null)
                {
                    user.ActivityList.Remove(activity);
                }
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }

        [HttpPut("Player/{id}/Activity/{activityId}")]
        public async Task<User> UpdateActivity(string id, string activityId,[FromBody] Activity activity)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            if(user != null) {
                var oldActivity = user.ActivityList.FirstOrDefault(x => x.Id == activityId);
                oldActivity.Amount = activity.Amount;
                oldActivity.TimestampUtc = activity.TimestampUtc;
                oldActivity.ActivityId = activity.ActivityId;
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
            }
            return user;
        }

        [HttpGet("List/Top")]
        public async Task<List<TopUser>> GetTop()
        {
            var users = await _context.Users.ToListAsync();

            var sortArray = new List<SortArrayItem>();
            users.ForEach(user =>
            {
                if(user.ActivityList == null)
                {
                    user.ActivityList = new List<Activity>();
                }
                var item = new SortArrayItem()
                {
                    Id = user.Id,
                    Total = user.ActivityList.Select(x => x.Amount * _activities.ActivityList.FirstOrDefault(k => k.Id == x.ActivityId).Value).Sum()
                };
                sortArray.Add(item);
            });

            sortArray = sortArray.OrderByDescending(x => x.Total).ToList();
            var returnList = new List<TopUser>();
            for (var i = 0; i < 5; i++) {
                try{
                    var user = users.FirstOrDefault(x => x.Id == sortArray[i].Id);
                    returnList.Add(new TopUser(){ FirstName = user.FirstName, LastName = user.LastName, Total = user.ActivityList.Select(x => x.Amount * _activities.ActivityList.FirstOrDefault(k => k.Id == x.ActivityId).Value).Sum()});
                } catch (Exception ex) {

                }
                
            }
            return returnList;
        }
    }

    public class UserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class SortArrayItem
    {
        public string Id { get; set; }
        public decimal Total { get; set; }
    }

    public class TopUser
    {
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public decimal Total {get;set;}
    }
}