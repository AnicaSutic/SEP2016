using Merchant.Business;
using Merchant.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

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
        public ActionResult GetRiskItemsForRisk(Risk risk)
        {
            var service = new RiskItemService();

            var riskItems = service.GetRiskItemsByRiskId(risk.Id);
            Dictionary<int, List<RiskItem>> riskItemsDict = new Dictionary<int, List<RiskItem>>();

            riskItemsDict.Add(risk.Id, (List<RiskItem>)riskItems);

            return Json(riskItemsDict, JsonRequestBehavior.AllowGet);
        }
    }
}