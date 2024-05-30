using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("[controller]")]
public class ListingController : ControllerBase {
    private readonly DataContext _context;

    public ListingController(DataContext context) {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Listing>>> GetListings(
        [FromQuery] string city,
        [FromQuery] decimal? price,
        [FromQuery] string address,
        [FromQuery] int? numberBeds,
        [FromQuery] int? numberBaths,
        [FromQuery] string province,
        [FromQuery] int? population,
        [FromQuery] decimal? latitude,
        [FromQuery] decimal? longitude,
        [FromQuery] decimal? medianFamilyIncome)
    {
        var query = _context.Listings.AsQueryable();

        if (!string.IsNullOrEmpty(city)) {
            query = query.Where(l => l.City == city);
        }

        if (price.HasValue) {
            query = query.Where(l => l.Price == price);
        }

        if (!string.IsNullOrEmpty(address)) {
            query = query.Where(l => l.Address == address);
        }

        if (numberBeds.HasValue) {
            query = query.Where(l => l.NumberBeds == numberBeds);
        }

        if (numberBaths.HasValue) {
            query = query.Where(l => l.NumberBaths == numberBaths);
        }

        if (!string.IsNullOrEmpty(province)) {
            query = query.Where(l => l.Province == province);
        }

        if (population.HasValue) {
            query = query.Where(l => l.Population == population);
        }

        if (latitude.HasValue) {
            query = query.Where(l => l.Latitude == latitude);
        }

        if (longitude.HasValue) {
            query = query.Where(l => l.Longitude == longitude);
        }

        if (medianFamilyIncome.HasValue) {
            query = query.Where(l => l.MedianFamilyIncome == medianFamilyIncome);
        }

        return await query.ToListAsync();
    }
}