using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Merchant.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Insurance()
        {
            return PartialView();
        }

        public ActionResult Calculator()
        {
            return PartialView();
        }

        public ActionResult HomePage()
        {
            return PartialView();
        }
    }
}