using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WashCoat.Web.Startup))]
namespace WashCoat.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
