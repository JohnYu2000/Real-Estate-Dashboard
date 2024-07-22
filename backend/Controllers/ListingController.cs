using DatabaseNamespace.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatabaseNamespace.Controllers {
    [ApiController]
    [Route("api")]
    public class ListingController : ControllerBase {
        private readonly DataContext _context;

        public ListingController(DataContext context) {
            _context = context;
        }

        [Authorize]
        [HttpGet("listings")]
        public async Task<ActionResult<IEnumerable<Listing>>> GetListings(
            [FromQuery] string? city = null,
            [FromQuery] decimal? minPrice = null,
            [FromQuery] decimal? maxPrice = null,
            [FromQuery] string? address = null,
            [FromQuery] int? minNumberBeds = null,
            [FromQuery] int? maxNumberBeds = null,
            [FromQuery] int? minNumberBaths = null,
            [FromQuery] int? maxNumberBaths = null,
            [FromQuery] string? province = null,
            [FromQuery] int? minPopulation = null,
            [FromQuery] int? maxPopulation = null,
            [FromQuery] decimal? minLatitude = null,
            [FromQuery] decimal? maxLatitude = null,
            [FromQuery] decimal? minLongitude = null,
            [FromQuery] decimal? maxLongitude = null,
            [FromQuery] decimal? minMedianFamilyIncome = null,
            [FromQuery] decimal? maxMedianFamilyIncome = null,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 50)
        {
            var query = _context.Listings.AsQueryable();

            if (!string.IsNullOrEmpty(city)) {
                query = query.Where(l => l.City == city);
            }

            if (minPrice.HasValue) {
                query = query.Where(l => l.Price >= minPrice);
            }

            if (maxPrice.HasValue) {
                query = query.Where(l => l.Price <= maxPrice);
            }

            if (!string.IsNullOrEmpty(address)) {
                query = query.Where(l => l.Address == address);
            }

            if (minNumberBeds.HasValue) {
                query = query.Where(l => l.NumberBeds >= minNumberBeds);
            }

            if (maxNumberBeds.HasValue) {
                query = query.Where(l => l.NumberBeds <= maxNumberBeds);
            }

            if (minNumberBaths.HasValue) {
                query = query.Where(l => l.NumberBaths >= minNumberBaths);
            }

            if (maxNumberBaths.HasValue) {
                query = query.Where(l => l.NumberBaths <= maxNumberBaths);
            }

            if (!string.IsNullOrEmpty(province)) {
                query = query.Where(l => l.Province == province);
            }

            if (minPopulation.HasValue) {
                query = query.Where(l => l.Population >= minPopulation);
            }

            if (maxPopulation.HasValue) {
                query = query.Where(l => l.Population <= maxPopulation);
            }

            if (minLatitude.HasValue) {
                query = query.Where(l => l.Latitude >= minLatitude);
            }

            if (maxLatitude.HasValue) {
                query = query.Where(l => l.Latitude <= maxLatitude);
            }

            if (minLongitude.HasValue) {
                query = query.Where(l => l.Longitude >= minLongitude);
            }

            if (maxLongitude.HasValue) {
                query = query.Where(l => l.Longitude <= maxLongitude);
            }

            if (minMedianFamilyIncome.HasValue) {
                query = query.Where(l => l.MedianFamilyIncome >= minMedianFamilyIncome);
            }

            if (maxMedianFamilyIncome.HasValue) {
                query = query.Where(l => l.MedianFamilyIncome <= maxMedianFamilyIncome);
            }

            var listings = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

            return listings;
        }

        [Authorize]
        [HttpPost("listing")]
        public async Task<ActionResult<ListingInfo>> AddListing([FromBody] Listing newListing) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            _context.Listings.Add(newListing);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetListings), new { id = newListing.Id }, newListing);
        }

        [Authorize]
        [HttpPut("listing")]
        public async Task<IActionResult> UpdateListing([FromQuery] int id, [FromBody] Listing updatedListing) {
            
            if (id != updatedListing.Id) {
                return BadRequest("Listing ID mismatch");
            }

            var existingListing = await _context.Listings.FindAsync(id);
            if (existingListing == null) {
                return NotFound();
            }

            existingListing.City = updatedListing.City;
            existingListing.Price = updatedListing.Price;
            existingListing.Address = updatedListing.Address;
            existingListing.NumberBeds = updatedListing.NumberBeds;
            existingListing.NumberBaths = updatedListing.NumberBaths;
            existingListing.Province = updatedListing.Province;
            existingListing.Population = updatedListing.Population;
            existingListing.Latitude = updatedListing.Latitude;
            existingListing.Longitude = updatedListing.Longitude;
            existingListing.MedianFamilyIncome = updatedListing.MedianFamilyIncome;

            try {
                await _context.SaveChangesAsync();
            } catch (DbUpdateConcurrencyException) {
                if (!ListingExists(id)) {
                    return NotFound();
                } else {
                    throw;
                }
            }

            return NoContent();
        }

        [Authorize]
        [HttpDelete("listing")]
        public async Task<IActionResult> DeleteListing([FromQuery] int id) {
            var listing = await _context.Listings.FindAsync(id);
            if (listing == null) {
                return NotFound();
            }

            _context.Listings.Remove(listing);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ListingExists(int id) {
            return _context.Listings.Any(e => e.Id == id);
        }
    }
}