using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;

public class DataContext : DbContext {
    public DataContext(DbContextOptions<DataContext> options) : base(options) {}
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<User>().ToTable("users");
    }
}

public class User {
    [Key]
    public int userid { get; set; }
    [Required]
    [Column("username")]
    public string username { get; set; }
    [Required]
    [Column("password")]
    public string password { get; set; }
    [Required]
    [EmailAddress]
    [Column("email")]
    public string email { get; set; }
    public DateTime created_at { get; set; }
}