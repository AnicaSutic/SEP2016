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

        [HttpPost]
        public ActionResult GetRiskItemsForRisk(string name)
        {
            var service = new RiskItemService();
            return Json(service.GetRiskItemsByRiskName(name), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Calculate(InsuranceDto ins)
        {
            decimal price = 0.0M;
            //pricelistitem ide preko id-a riskitem-a
            //i onda je cena onoga odabranog zapravo cena ta u pricelistitem tabeli
            //osim ako treba da se pomnozi sa necim kao npr kod number of insurants
            var service = new PriceListItemService();
            var riskService = new RiskService();

            //foreach(var property in ins.GetType().GetProperties())
            //{
            //    if(!property.Name.Equals("Duration"))
            //    {
            //        var p = service.GetPricelistItemByRiskItemName(riskService.GetRiskByName(property.Name).Id);
            //        var pp = p.First().Price;
            //        price += pp;
            //    }

            //}
            //var durationPrice = ins.duration;

            //var durationPrice = 0.0M;
            //var regionPrice = ins.Region != 0 ?service.GetPricelistItemByRiskItemId(ins.Region).First().Price : 0.0M;
            //var agePrice = ins.Age != 0 ? service.GetPricelistItemByRiskItemId(ins.Age).First().Price : 0.0M;
            //var sportPrice = ins.Sport != 0 ? service.GetPricelistItemByRiskItemId(ins.Sport).First().Price : 0.0M;
            //var valuePrice = ins.InsuredValue != 0 ? service.GetPricelistItemByRiskItemId(ins.InsuredValue).First().Price : 0.0M;

            //price = regionPrice + agePrice + sportPrice + valuePrice;

            //
            PriceCalculator calculator = new PriceCalculator();
            PriceDto priceDto = new PriceDto();
            priceDto.Price = 2000.0M;
            priceDto.Coefficient = 0.5M;

            price = calculator.GetCalculatedPrice(priceDto);

            var totalPrice = price * decimal.Parse(ins.NumberOfInsurants);
            return Json(totalPrice);
        }
    }
}