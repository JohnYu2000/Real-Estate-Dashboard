using Microsoft.AspNetCore.Mvc;
using DatabaseNamespace.Models;

namespace DatabaseNamespace.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase {
        [HttpPost("login")]
        public IActionResult Login([FromBody] UserInfo userInfo) {
            if (userInfo == null) {
                return BadRequest(new {
                    Status = "Failure",
                    Message = "User not found in database."
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