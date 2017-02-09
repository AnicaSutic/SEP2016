using Common;
using System;
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

            var durationPriceTotal = duration * durationPercentage;

            var totalPrice = 0.0M;

            if (insurance is TravelInsuranceDto)
            {
                TravelInsuranceDto travelIns = (TravelInsuranceDto)insurance;

                var numOfInsurants = int.Parse(travelIns.NumberOfInsurants);
                decimal insurantsPercentage = 0;

                if (numOfInsurants < 5)
                    insurantsPercentage = 1;
                else if (numOfInsurants > 4 && numOfInsurants < 10)
                    insurantsPercentage = 0.9M;
                else
                    insurantsPercentage = 0.85M;

                var regionPrice = travelIns.Region != 0 ? service.GetPricelistItemByRiskItemId(travelIns.Region).First().Price * service.GetPricelistItemByRiskItemId(travelIns.Region).First().Coefficient : 0.0M;
                var agePrice = travelIns.Age != 0 ? service.GetPricelistItemByRiskItemId(travelIns.Age).First().Price * service.GetPricelistItemByRiskItemId(travelIns.Age).First().Coefficient : 0.0M;
                var sportPrice = travelIns.Sport != 0 ? service.GetPricelistItemByRiskItemId(travelIns.Sport).First().Price * service.GetPricelistItemByRiskItemId(travelIns.Sport).First().Coefficient : 0.0M;
                var valuePrice = travelIns.InsuredValue != 0 ? service.GetPricelistItemByRiskItemId(travelIns.InsuredValue).First().Price * service.GetPricelistItemByRiskItemId(travelIns.InsuredValue).First().Coefficient : 0.0M;

                var insurantsTotal = numOfInsurants * insurantsPercentage;

                totalPrice = durationPriceTotal * (regionPrice + agePrice + sportPrice + valuePrice) * insurantsTotal;
            }

            if(insurance is VehicleInsuranceDto)
            {
                VehicleInsuranceDto vehicleIns = (VehicleInsuranceDto)insurance;
            }

            if(insurance is HomeInsuranceDto)
            {
                HomeInsuranceDto homeIns = (HomeInsuranceDto)insurance;
            }

            return Math.Round(totalPrice, 2);
        }
    }
}