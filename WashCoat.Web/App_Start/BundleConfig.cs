using System.Web;
using System.Web.Optimization;

namespace WashCoat.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            /*bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));*/
            bundles.Add(new ScriptBundle("~/bundles/WashCoatWebApp")
            .IncludeDirectory("~/Scripts/Controllers", "*.js")
            .IncludeDirectory("~/Scripts/Factories", "*.js")
            .Include("~/Scripts/WashCoatWebApp.js"));

            bundles.Add(new ScriptBundle("~/bundles/AngularStuff").Include(/*"~/Scripts/jquery-3.1.1.js",*/
                "~/Scripts/jquery-3.1.1.min.js")
                //.Include("~/Scripts/angular.js") //basic
                .Include("~/Scripts/angular.min.js") //...
                //.Include("~/Scripts/angular-route.js") //routing, duh
                .Include("~/Scripts/angular-route.min.js") //...
                
                //.Include("~/Scripts/ng-grid.js")
                .Include("~/Scripts/ng-grid.min.js")
                );

            bundles.Add(new ScriptBundle("~/bundles/JQueryStuff")
                .Include("~/Scripts/jquery-1.9.1.js",
                "~/Scripts/jquery-1.9.1.min.js") //...

                );

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      //"~/Content/bootstrap.css",
                      //"~/Content/ui-grid.css",
                      //"~/Content/ui-grid.min.css",
                      "~/Content/ng-grid.min.css",
                      "~/Content/site.css"));
        }
    }
}
