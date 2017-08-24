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

       /* [HttpGet]
        [AllowAnonymous]
        public string GetSerializedStudentVMS()
        {
            var students = new[]
             {
                    new StudentVM {RollNo = 1, StudentName = "Jamal Uddin", Class="One", ClassTeacher="Mr. Anowar Hossain"},
                    new StudentVM {RollNo = 5, StudentName = "Kamal Hossain", Class="Two", ClassTeacher="Mr. Shahana Begum"},
                    new StudentVM {RollNo = 10, StudentName = "Jahid Hasan", Class="Three", ClassTeacher="Mr. Lutfor Rahman"},
                };

            //Used to make property name as camel case
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            return JsonConvert.SerializeObject(students, Formatting.None, settings); //Returns students list as JSON
        }*/
    }
}