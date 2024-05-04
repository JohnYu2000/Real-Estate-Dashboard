using Microsoft.AspNetCore.Mvc;
using DatabaseNamespace.Models;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatabaseNamespace.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(DataContext context, IConfiguration configuration) {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserInfo userInfo) {
            if (userInfo == null) {
                return BadRequest(new {
                    Status = "Failure",
                    Message = "Invalid credentials."
                });
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.email == userInfo.Email && u.password == userInfo.Password);

            if (user == null) {
                return Unauthorized(new {
                    Status = "Failure",
                    Message = "Invalid email or password"
                });
            }

            var token = GenerateJwtToken(user);

            return Ok(new {
                Status = "Success",
                Message = "User data received.",
                Token = token
            });
        }

        private string GenerateJwtToken(User user) {
            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtKey = _configuration["Jwt:Key"];
            if (string.IsNullOrEmpty(jwtKey)) {
                throw new InvalidOperationException("JWT secret key is missing or empty.");
            }
            var key = Encoding.ASCII.GetBytes(jwtKey);
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new Claim[] {
                    new Claim(ClaimTypes.Name, user.email)
                }),
                Expires = DateTime.UtcNow.AddHours(1),  // Token expiry time
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}