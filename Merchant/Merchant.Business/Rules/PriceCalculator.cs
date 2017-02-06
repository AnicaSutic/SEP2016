using Common;
using System.Linq;

namespace Merchant.Business.Rules
{
    public class PriceCalculator
    {
        public decimal CalculatePrice(InsuranceDto insurance)
        {
            var service = new PriceListItemService();
            var riskService = new RiskService();

            var duration = (insurance.EndDate - insurance.StartDate).Days;
            decimal durationPercentage = 0;

            if (duration == 0 || (duration > 0 && duration < 8))
                durationPercentage = 1;
            else if (duration > 7 && duration < 15)
                durationPercentage = 0.9M;
            else if (duration > 14 && duration < 31)
                durationPercentage = 0.8M;
            else
                durationPercentage = 0.75M;

            var numOfInsurants = int.Parse(insurance.NumberOfInsurants);
            decimal insurantsPercentage = 0;

            if (numOfInsurants < 5)
                insurantsPercentage = 1;
            else if (numOfInsurants > 4 && numOfInsurants < 10)
                insurantsPercentage = 0.9M;
            else
                insurantsPercentage = 0.85M;

            var durationPrice = service.GetPricelistItemByRiskItemId(18).First().Price * service.GetPricelistItemByRiskItemId(18).First().Coefficient;
            var regionPrice = insurance.Region != 0 ? service.GetPricelistItemByRiskItemId(insurance.Region).First().Price * service.GetPricelistItemByRiskItemId(insurance.Region).First().Coefficient : 0.0M;
            var agePrice = insurance.Age != 0 ? service.GetPricelistItemByRiskItemId(insurance.Age).First().Price * service.GetPricelistItemByRiskItemId(insurance.Age).First().Coefficient : 0.0M;
            var sportPrice = insurance.Sport != 0 ? service.GetPricelistItemByRiskItemId(insurance.Sport).First().Price * service.GetPricelistItemByRiskItemId(insurance.Sport).First().Coefficient : 0.0M;
            var valuePrice = insurance.InsuredValue != 0 ? service.GetPricelistItemByRiskItemId(insurance.InsuredValue).First().Price * service.GetPricelistItemByRiskItemId(insurance.InsuredValue).First().Coefficient : 0.0M;

            var durationPriceTotal = durationPrice * duration * durationPercentage;

            var totalPrice = durationPriceTotal + regionPrice + agePrice + sportPrice + valuePrice;

            var insurantPrice = service.GetPricelistItemByRiskItemId(19).First().Price * service.GetPricelistItemByRiskItemId(19).First().Coefficient;
            var insurantsTotal = insurantPrice * numOfInsurants * insurantsPercentage;

            return totalPrice * insurantsTotal;
        }
    }
}