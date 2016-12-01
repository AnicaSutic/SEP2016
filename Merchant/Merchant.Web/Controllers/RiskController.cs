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
        // GET: Risk
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
            var service = new RiskService();
            return Json(service., JsonRequestBehavior.AllowGet);
        }
    }
}