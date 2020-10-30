using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Context
{
    public class InternContext : DbContext
    {
        public InternContext(DbContextOptions<InternContext> options) : base(options) { }
        
        public DbSet<Intern> Interns { get; set; }
    }
}
