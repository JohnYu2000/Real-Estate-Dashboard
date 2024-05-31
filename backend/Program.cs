using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Cors.Infrastructure;

namespace DatabaseNamespace {
    class Program {
        static void Main(string[] args) {
            var builder = WebApplication.CreateBuilder(args);
            ConfigureServices(builder);
            var app = builder.Build();
            ConfigureApp(app);
            app.Run();
        }

        static void ConfigureServices(WebApplicationBuilder builder) {
            builder.Services.AddCors(options => {
                options.AddPolicy("AllowSpecificOrigin", new CorsPolicyBuilder()
                    .WithOrigins("http://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .Build());
            });
            builder.Services.AddControllers();
            builder.Services.AddDbContext<DataContext>(options =>
                options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.WebHost.ConfigureKestrel(serverOptions => {
                serverOptions.ListenAnyIP(8000);
            });
            builder.Services.AddAuthentication(options => {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options => {
                var key = builder.Configuration["Jwt:Key"];
                if (key != null) {
                    options.TokenValidationParameters = new TokenValidationParameters {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)),
                    };    
                } else {
                    throw new InvalidOperationException("JWT Secret Key is missing in the configuration.");
                }
            });
            builder.Services.AddAuthorization();
        }

        static void ConfigureApp(WebApplication app) {
            if (app.Environment.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("AllowSpecificOrigin");
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();
        }
    }
}