using Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Merchant.Web.Controllers
{
    public class PurchaseController : Controller
    {
        // GET: Purchase
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult BuyInsurance(InsuranceDetailsDto insurance)
        {
            if(insurance.Type == "Travel")
            {

            }

            if(insurance.Type == "Home")
            {

            }

            if(insurance.Type == "Vehicle")
            {

            }

            return null;
        }
    }
}