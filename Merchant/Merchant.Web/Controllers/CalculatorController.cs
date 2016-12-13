using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Merchant.Web.Controllers
{
    public class CalculatorController : Controller
    {
        // GET: Calculator
        public ActionResult GetRiskItemsForRisk()
        {
            return View();
        }
    }
}