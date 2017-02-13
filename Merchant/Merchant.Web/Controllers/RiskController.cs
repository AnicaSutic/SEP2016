using Common;
using Merchant.Business;
using Merchant.DataAccess;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;
using Merchant.Business.Rules;
using System.Web.Script.Serialization;
using Microsoft.Security.Application;
using Merchant.Web.Helpers;
using Merchant.Web.Filters;

namespace Merchant.Web.Controllers
{
    public class RiskController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetRisksByCategory(int id)
        {
            var service = new RiskService();
            return Json(service.GetRiskByCategory(id), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetOtherCategories()
        {
            var service = new RiskCategoryService();
            return Json(service.GetOtherRiskCategories(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetAllCategories()
        {
            var service = new RiskCategoryService();
            return Json(service.GetAllRiskCategories(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetAllRisks()
        {
            var service = new RiskService();
            return Json(service.GetAllRisks(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetAllRiskItems()
        {
            var service = new RiskItemService();
            return Json(service.GetAllRiskItems(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetRiskItemsForRisk(string id)
        {
            var service = new RiskItemService();
            return Json(service.GetRiskItemsByRiskName(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [CustomValidateAntiForgeryToken]
        public ActionResult Calculate(InsuranceDetailsDto obj)
        {
            decimal price = 0.0M;
            var calculator = new PriceCalculator();
            var serializer = new JavaScriptSerializer();

            if (obj.Type == "Travel")
            {
                TravelInsuranceDto newTravelIns = Serializer.SerializeAndConvert(serializer.Deserialize<TravelInsuranceDto>(obj.Data)) as TravelInsuranceDto;
                price = calculator.CalculatePrice(newTravelIns);
            }

            if (obj.Type == "Home")
            {
                HomeInsuranceDto newHomeIns = Serializer.SerializeAndConvert(serializer.Deserialize<HomeInsuranceDto>(obj.Data)) as HomeInsuranceDto;
                price = calculator.CalculatePrice(newHomeIns);
            }

            if (obj.Type == "Vehicle")
            {
                VehicleInsuranceDto newVehicleIns = Serializer.SerializeAndConvert(serializer.Deserialize<VehicleInsuranceDto>(obj.Data)) as VehicleInsuranceDto;
                price = calculator.CalculatePrice(newVehicleIns);
            }

            return Json(price);
        }
    }
}