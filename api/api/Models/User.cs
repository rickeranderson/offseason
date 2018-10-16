using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class User
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public List<Activity> ActivityList { get; set; }
    }

    public class Activity
    {
        public string Id { get; set; }
        public int ActivityId { get; set; }
        public decimal Amount { get; set; }
    }
}
