using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

public class DataContext : DbContext {
    public DataContext(DbContextOptions<DataContext> options) : base(options) {}
    public DbSet<User> Users { get; set; }
}

public class User {
    [Key]
    public int Id { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}