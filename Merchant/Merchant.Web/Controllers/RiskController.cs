using Common;
using Merchant.Business;
using Merchant.DataAccess;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;
using Merchant.Business.Rules;

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
        public ActionResult Calculate(InsuranceDto ins)
        {
            decimal price = 0.0M;
            var calculator = new PriceCalculator();
            
            price = calculator.CalculatePrice(ins);

            return Json(price);
        }
    }
}