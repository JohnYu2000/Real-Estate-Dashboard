using DatabaseNamespace.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;

public class DataContext : DbContext {
    public DataContext(DbContextOptions<DataContext> options) : base(options) {}
    public DbSet<User> Users { get; set; }
    public DbSet<Listing> Listings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<User>().ToTable("users");
        
        modelBuilder.Entity<Listing>().ToTable("listings");
        modelBuilder.Entity<Listing>().Property(l => l.City).IsRequired();
        modelBuilder.Entity<Listing>().Property(l => l.Price).HasColumnType("NUMERIC");
        modelBuilder.Entity<Listing>().Property(l => l.Address).HasColumnType("TEXT");
        modelBuilder.Entity<Listing>().Property(l => l.NumberBeds).HasColumnType("INTEGER");
        modelBuilder.Entity<Listing>().Property(l => l.NumberBaths).HasColumnType("INTEGER");
        modelBuilder.Entity<Listing>().Property(l => l.Province).HasColumnType("VARCHAR");
        modelBuilder.Entity<Listing>().Property(l => l.Population).HasColumnType("INTEGER");
        modelBuilder.Entity<Listing>().Property(l => l.Latitude).HasColumnType("NUMERIC");
        modelBuilder.Entity<Listing>().Property(l => l.Longitude).HasColumnType("NUMERIC");
        modelBuilder.Entity<Listing>().Property(l => l.MedianFamilyIncome).HasColumnType("NUMERIC");
    }
}

public class User {
    [Key]
    public int userid { get; set; }
    [Required]
    [Column("username")]
    public string? username { get; set; }
    [Required]
    [Column("password")]
    public string? password { get; set; }
    [Required]
    [EmailAddress]
    [Column("email")]
    public string? email { get; set; }
    public DateTime created_at { get; set; }
}

public class Listing {
    [Key]
    [Column("id")]
    public int Id { get; set; }
    [Required]
    [Column("city")]
    public string? City { get; set; }
    [Column("price")]
    public decimal Price { get; set; }
    [Column("address")]
    public string? Address { get; set; }
    [Column("number_beds")]
    public int NumberBeds { get; set; }
    [Column("number_baths")]
    public int NumberBaths { get; set; }
    [Column("province")]
    public string? Province { get; set; }
    [Column("population")]
    public int Population { get; set; }
    [Column("latitude")]
    public decimal Latitude { get; set; }
    [Column("longitude")]
    public decimal Longitude { get; set; }
    [Column("median_family_income")]
    public decimal MedianFamilyIncome { get; set; }
}