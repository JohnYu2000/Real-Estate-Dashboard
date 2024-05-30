using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatabaseNamespace.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class ListingController : ControllerBase {
        private readonly DataContext _context;

        public ListingController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Listing>>> GetListings(
            [FromHeader] string? city = null,
            [FromHeader] decimal? price = null,
            [FromHeader] string? address = null,
            [FromHeader] int? numberBeds = null,
            [FromHeader] int? numberBaths = null,
            [FromHeader] string? province = null,
            [FromHeader] int? population = null,
            [FromHeader] decimal? latitude = null,
            [FromHeader] decimal? longitude = null,
            [FromHeader] decimal? medianFamilyIncome = null,
            [FromHeader] int page = 1,
            [FromHeader] int pageSize = 50)
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

            var listings = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

            return listings;
        }
    }
}