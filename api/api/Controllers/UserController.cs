using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Infrastructure;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

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
            return users;
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
    }

    public class UserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}