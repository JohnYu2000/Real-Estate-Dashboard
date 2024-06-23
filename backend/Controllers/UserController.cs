using Microsoft.AspNetCore.Mvc;
using DatabaseNamespace.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace DatabaseNamespace.Controllers {
    [ApiController]
    [Route("api")]
    public class UserController : ControllerBase {
        private readonly DataContext _context;

        public UserController(DataContext context) {
            _context = context;
        }

        [Authorize]
        [HttpGet("user")]
        public async Task<IActionResult> GetUser([FromQuery] string username) {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.username == username);

            if (user == null) {
                return NotFound(new {
                    Status = "Failure",
                    Message = "User not found."
                });
            }

            return Ok(new {
                Status = "Success",
                User = user
            });
        }
    }
}