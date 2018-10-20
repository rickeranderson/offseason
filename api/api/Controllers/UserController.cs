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

        [HttpGet("List/Top")]
        public async Task<List<TopUser>> GetTop()
        {
            var users = _context.Users.ToList();

            var sortArray = new List<SortArrayItem>();
            users.ForEach(user =>
            {
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