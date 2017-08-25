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

        [HttpPost]
        [AllowAnonymous]
        public bool DeleteWashCoatEntry([System.Web.Http.FromBody] int id)
        {
            var context = new Coater_LabEntities();
            var deleteEntry = context.LabData1.Where(x => x.ID == id).FirstOrDefault();
            if(deleteEntry != null)
            {
                context.LabData1.Remove(deleteEntry);
                context.SaveChanges();
            }
            return true;
        }
        [HttpPost]
        [AllowAnonymous]
        public bool AddWashCoat([System.Web.Http.FromBody] LabData1 labData1Model)
        {
            try
            {
                var context = new Coater_LabEntities();
                var newEntry = new LabData1()
                {
                    BatchID = labData1Model.BatchID,
                    LabLogNumber = labData1Model.LabLogNumber,
                    Solids500C = labData1Model.Solids500C,
                    Pt = labData1Model.Pt,
                    Pd = labData1Model.Pd,
                    Rh = labData1Model.Rh,
                    Zr = labData1Model.Zr,
                    Ce = labData1Model.Ce,
                    Ni = labData1Model.Ni,
                    Ba = labData1Model.Ba,
                    La = labData1Model.La,
                    Ir = labData1Model.Ir,
                    pH = labData1Model.pH,
                    Y = labData1Model.Y,
                    Nd = labData1Model.Nd,
                    Pr = labData1Model.Pr,
                    Hf = labData1Model.Hf,
                    Temperature = labData1Model.Temperature,
                    Viscosity_Fresh = labData1Model.Viscosity_Fresh,
                    Viscosity_Aged = labData1Model.Viscosity_Aged,
                    Arizona_Solids = labData1Model.Arizona_Solids,
                    WashCoatLoading = labData1Model.WashCoatLoading
                };

                context.LabData1.Add(newEntry);
                context.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
            
        }
    }
}