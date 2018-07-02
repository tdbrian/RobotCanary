using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Okta.Sdk;
using Okta.Sdk.Configuration;
using FlaskStudio.ExternalServices.Okta;
using FlaskStudio.Users;
using Swashbuckle.AspNetCore.Swagger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using MongoDB.Driver;

namespace FlaskStudio
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddTransient<SystemActionsRepo>();
            services.AddTransient<IAuthUserManager, OktaUserManager>();
            services.AddSingleton(_ => {
                var client = new MongoClient(Configuration.GetConnectionString("flashstudiodb"));
                return client.GetDatabase("flashstudio");
            });

            services.AddSingleton(_ => new OktaClient(
                new OktaClientConfiguration
                {
                    OrgUrl = Configuration.GetValue<string>("Okta:Url"),
                    Token = Configuration.GetValue<string>("Okta:Token")
                })
            );

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "FlaskStudio API", Version = "v1" });
            });

            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                sharedOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options => {
                options.Authority = "https://{yourOktaDomain}.com/oauth2/default";
                options.Audience = "api://default";
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseMvc();

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "FlaskStudio API v1");
            });
        }
    }
}
