using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace WashCoat.Web.Controllers
{
    public class WashCoatController : Controller
    {
        // GET: WashCoat
        [AllowAnonymous]
        public ActionResult Index()
        {

            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public string GetWashCoatsData()
        {
            var context = new Coater_LabEntities();
            var labData = context.LabData1.ToList();
     

            //Used to make property name as camel case
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            return JsonConvert.SerializeObject(labData, Formatting.None, settings); //Returns students list as JSON
        }
    }
}