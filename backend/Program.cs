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
        }

        static void ConfigureApp(WebApplication app) {
            if (app.Environment.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseAuthorization();

            app.MapControllers();
        }
    }
}