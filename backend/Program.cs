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

using Newtonsoft.Json;  // Remove this later

namespace DatabaseNamespace {
    class Program {
        static void Main(string[] args) {
            var builder = WebApplication.CreateBuilder(args);
            // ----- REMOVE THIS LATER IF NOT NEEDED (START) ----- //
            var baseDirectory = AppContext.BaseDirectory;
            Console.WriteLine($"baseDirectory: {baseDirectory}");
            var appSettingsPath = Path.Combine(baseDirectory, "appsettings.json");
            builder.Configuration.AddJsonFile(appSettingsPath, optional: false, reloadOnChange: true);
            // ----- REMOVE THIS LATER IF NOT NEEDED (END) ----- //
            ConfigureServices(builder);
            var app = builder.Build();
            ConfigureApp(app);
            app.Run();
        }

        static void ConfigureServices(WebApplicationBuilder builder) {
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
                var defaultconn = builder.Configuration["ConnectionStrings:DefaultConnection"];
                Console.WriteLine($"Key: {key}");
                Console.WriteLine($"defaultconn: {defaultconn}");
            //     if (secretKey != null) {
            //         options.TokenValidationParameters = new TokenValidationParameters {
            //             ValidateIssuer = true,
            //             ValidateAudience = true,
            //             ValidateLifetime = true,
            //             ValidateIssuerSigningKey = true,
            //             ValidIssuer = builder.Configuration["Jwt:Issuer"],
            //             ValidAudience = builder.Configuration["Jwt:Audience"],
            //             IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey)),
            //         };    
            //     } else {
            //         throw new InvalidOperationException("JWT Secret Key is missing in the configuration.");
            //     }
            });
            builder.Services.AddAuthorization();
        }

        static void ConfigureApp(WebApplication app) {
            if (app.Environment.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();
        }
    }
}