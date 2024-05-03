using Microsoft.AspNetCore.Mvc;
using DatabaseNamespace.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseNamespace.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase {
        private readonly DataContext _context;

        public AuthController(DataContext context) {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserInfo userInfo) {
            if (userInfo == null) {
                return BadRequest(new {
                    Status = "Failure",
                    Message = "User not found in database."
                });
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.email == userInfo.Email && u.password == userInfo.Password);

            if (user == null) {
                return BadRequest(new {
                    Status = "Failure",
                    Message = "Invalid email or password"
                });
            }

            return Ok(new {
                Status = "Success",
                Message = "User data received.",
                Email = userInfo.Email,
                Password = userInfo.Password
            });
        }
    }
}