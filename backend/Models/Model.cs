using System.ComponentModel.DataAnnotations;

namespace DatabaseNamespace.Models {
    public class UserInfo {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class ListingInfo {
        [Key]
        public int Id { get; set; }
        public required string City { get; set; }
        public decimal Price { get; set; }
        public required string Address { get; set; }
        public int NumberBeds{ get; set; }
        public int NumberBaths { get; set; }
        public required string Province { get; set; }
        public int Population { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public decimal MedianFamilyIncome { get; set; }
    }
}