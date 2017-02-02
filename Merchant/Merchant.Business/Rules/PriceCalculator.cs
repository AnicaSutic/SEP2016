using org.drools.dotnet.compiler;
using org.drools.dotnet.rule;
using org.drools.dotnet;
using System.IO;
using System.Reflection;
using Common;

namespace Merchant.Business.Rules
{
    public class PriceCalculator
    {
        
        public decimal CalculatePrice(InsuranceDto insurance)
        {
            var service = new PriceListItemService();
            var riskService = new RiskService();
            var calculatedPrice = 0.0M;

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


            //var totalPrice = price * decimal.Parse(ins.NumberOfInsurants);

            return calculatedPrice;
        }

    }
}