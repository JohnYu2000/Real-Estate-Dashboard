using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;

namespace DatabaseNamespace {
    class Program {
        static void Main(string[] args) {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<DataContext>(options =>
                options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.WebHost.ConfigureKestrel(serverOptions => {
                serverOptions.ListenAnyIP(8000); // Listen for incoming connections on all network interfaces
            });
            var app = builder.Build();
            app.MapPost("/login", async (HttpContext httpContext) => {
                try {
                    var userInfo = await httpContext.Request.ReadFromJsonAsync<UserInfo>();
                    if (userInfo != null) {
                        return Results.Json(new {
                            Status = "Success",
                            Message = "Request received and parsed successfully.",
                            Email = userInfo.Email,
                            Password = userInfo.Password,
                        });
                    } else {
                        return Results.Json(new { Status = "Failure", Message = "No data received." });
                    }
                } catch (Exception) {
                    return Results.Json(new { Status = "Error", Message = "Failed to parse request." });
                }
            });
            app.Run();
        }
    }

    public class UserInfo {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}