using Merchant.Business;
using Merchant.DataAccess;
using System.Collections.Generic;
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
        public ActionResult GetRiskItemsForRisk(int id)
        {
            var service = new RiskItemService();
            return Json(service.GetRiskItemsByRiskId(id), JsonRequestBehavior.AllowGet);
        }
    }
}