using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Activities
    {
        public List<ActivityItem> ActivityList {get;set;}

        public Activities()
        {
            this.ActivityList = new List<ActivityItem>() {
                { new ActivityItem() {Id = 0, Description="Weightlifting", Value=4}},
                { new ActivityItem() {Id = 1, Description="Yoga/Stretching", Value=4}},
                { new ActivityItem() {Id = 2, Description="Running/Cardio", Value=4}},
                { new ActivityItem() {Id = 3, Description="Other Conditioning", Value=4}},
                { new ActivityItem() {Id = 4, Description="Practice", Value=2}},
                { new ActivityItem() {Id = 5, Description="Recreational Activities", Value=1}}
            };
        }
    }

    public class ActivityItem
    {
        public int Id {get;set;}
        public string Description {get;set;}
        public decimal Value {get;set;}
    }
}
