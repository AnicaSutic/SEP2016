﻿using System;
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

        public ActionResult HomePage()
        {
            return View();
        }

        public ActionResult Insurance()
        {
            return View();
        }

        public ActionResult TermsAndConditions()
        {
            return View();
        }

        public ActionResult Travel()
        {
            return View();
        }

        public ActionResult Insurants()
        {
            return View();
        }

        public ActionResult Others()
        {
            return View();
        }

        //public ActionResult CalculatePrice()
        //{
        //    return View();
        //}

        //public ActionResult Insurants()
        //{
        //    return View();
        //}

        //public ActionResult OtherInsurance()
        //{
        //    return View();
        //}
    }
}