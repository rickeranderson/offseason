using api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Infrastructure
{
    public static class SeedData
    {
        public static void Initialize(this ApplicationDbContext context, bool dontCheckMigrations = false)
        {
            if (context.AllMigrationsApplied())
            {
                User player = new User()
                {
                    Id = Guid.NewGuid().ToString(),
                    FirstName = "Normal",
                    LastName = "Person",
                    Role = "Player",
                    ActivityList = new List<Activity> {
                        new Activity() {
                            Id = Guid.NewGuid().ToString(),
                            ActivityId = 1,
                            Amount = 0.5M,
                            TimestampUtc = DateTime.Now
                        },
                        new Activity() {
                            Id = Guid.NewGuid().ToString(),
                            ActivityId = 2,
                            Amount = 0.75M,
                            TimestampUtc = DateTime.Now
                        }
                    }
                };
                context.Users.Add(player);
                context.SaveChanges();
            }
        }
    }
}
