using api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //builder.Entity<Post>().ToTable("Post");
            //builder.Entity<PostComment>().ToTable("Comment");
            //builder.Entity<Device>().ToTable("Device");

            builder.Entity<User>().ToTable("User");
            builder.Entity<Activity>().ToTable("Activity");
        }

        //public DbSet<Device> Devices { get; set; }
        //public DbSet<Post> Posts { get; set; }
        //public DbSet<PostComment> Comments { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Activity> Activities { get; set; }
    }
}
