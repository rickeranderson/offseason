using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Infrastructure;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ActivityController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("List/All")]
        public async Task<List<Activity>> GetAll()
        {
            var allActivities = await _context.Activities.ToListAsync();
            return allActivities;
        }

        [HttpGet("List/Top")]
        public async Task<List<Activity>> GetTop()
        {
            var allActivities = await _context.Activities.ToListAsync();
            return allActivities;
        }
    }
}
