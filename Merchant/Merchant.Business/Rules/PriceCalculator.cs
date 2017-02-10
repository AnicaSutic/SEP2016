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

                int numOfInsurants = 0;
                int.TryParse(travelIns.NumberOfInsurants, out numOfInsurants);
                decimal insurantsPercentage = 0;
                decimal insurantsTotal = 0;

                if(numOfInsurants != 0)
                {
                    if (numOfInsurants > 0 && numOfInsurants < 5)
                        insurantsPercentage = 1;
                    else if (numOfInsurants > 4 && numOfInsurants < 10)
                        insurantsPercentage = 0.9M;
                    else
                        insurantsPercentage = 0.85M;

                    insurantsTotal = numOfInsurants * insurantsPercentage;
                }
                

                var regionPrice = travelIns.Region != 0 ? service.GetPricelistItemByRiskItemId(travelIns.Region).First().Price * service.GetPricelistItemByRiskItemId(travelIns.Region).First().Coefficient : 0.0M;
                var agePrice = travelIns.Age != 0 ? service.GetPricelistItemByRiskItemId(travelIns.Age).First().Price * service.GetPricelistItemByRiskItemId(travelIns.Age).First().Coefficient : 0.0M;
                var sportPrice = travelIns.Sport != 0 ? service.GetPricelistItemByRiskItemId(travelIns.Sport).First().Price * service.GetPricelistItemByRiskItemId(travelIns.Sport).First().Coefficient : 0.0M;
                var valuePrice = travelIns.InsuredValue != 0 ? service.GetPricelistItemByRiskItemId(travelIns.InsuredValue).First().Price * service.GetPricelistItemByRiskItemId(travelIns.InsuredValue).First().Coefficient : 0.0M;

                totalPrice = (regionPrice + agePrice + sportPrice + valuePrice) * insurantsTotal;
            }

            if(insurance is VehicleInsuranceDto)
            {
                VehicleInsuranceDto vehicleIns = (VehicleInsuranceDto)insurance;

                var packagePrice = service.GetPricelistItemByRiskItemId(vehicleIns.Package).First().Price * service.GetPricelistItemByRiskItemId(vehicleIns.Package).First().Coefficient;

                decimal towingKm = 0;
                decimal accommodationDays = 0;
                decimal repairPrice = 0;

                decimal.TryParse(vehicleIns.TowingKm, out towingKm);
                decimal.TryParse(vehicleIns.RepairPrice, out repairPrice);
                decimal.TryParse(vehicleIns.AccommodationDays, out accommodationDays);

                decimal choosenPackagePrice = 0;

                if (repairPrice != 0) { }
                    choosenPackagePrice = repairPrice;

                if(towingKm != 0)
                {
                    decimal kmPercentage = 0;

                    if (towingKm < 21)
                        kmPercentage = 1;
                    else if (towingKm > 20 && towingKm < 51)
                        kmPercentage = 0.85M;
                    else if (towingKm > 50 && towingKm < 101)
                        kmPercentage = 0.75M;
                    else
                        kmPercentage = 0.7M;

                    choosenPackagePrice = service.GetPricelistItemByRiskItemId(27).First().Price * service.GetPricelistItemByRiskItemId(27).First().Coefficient * kmPercentage;
                }

                if(accommodationDays != 0)
                {
                    decimal daysPercentage = 0;

                    if (accommodationDays < 4)
                        daysPercentage = 1;
                    else if (accommodationDays > 3 && accommodationDays < 6)
                        daysPercentage = 0.8M;
                    else if (accommodationDays > 5 && accommodationDays < 11)
                        daysPercentage = 0.7M;
                    else
                        daysPercentage = 0.65M;

                    choosenPackagePrice = service.GetPricelistItemByRiskItemId(28).First().Price * service.GetPricelistItemByRiskItemId(28).First().Coefficient * daysPercentage;
                }

                totalPrice = packagePrice + choosenPackagePrice;
            }

            if(insurance is HomeInsuranceDto)
            {
                HomeInsuranceDto homeIns = (HomeInsuranceDto)insurance;

                decimal surfaceArea = 0;
                decimal.TryParse(homeIns.SurfaceArea, out surfaceArea);
                decimal surfaceAreaPercentage = 0;
                decimal totalSurfaceAreaPrice = 0;

                if(surfaceArea != 0) { 
                    if (surfaceArea < 31)
                        surfaceAreaPercentage = 1;
                    else if (surfaceArea > 30 && surfaceArea < 81)
                        surfaceAreaPercentage = 0.85M;
                    else if (surfaceArea > 80 && surfaceArea < 121)
                        surfaceAreaPercentage = 0.8M;
                    else
                        surfaceAreaPercentage = 0.75M;

                    totalSurfaceAreaPrice = service.GetPricelistItemByRiskItemId(29).First().Price * service.GetPricelistItemByRiskItemId(29).First().Coefficient * surfaceAreaPercentage;
                }

                decimal buildingAge = 0;
                decimal.TryParse(homeIns.BuildingAge, out buildingAge);
                decimal buildingAgePercentage = 0;
                decimal totalBuildingAgePrice = 0;

                if(buildingAge != 0)
                {
                    if (buildingAge < 11)
                        buildingAgePercentage = 1;
                    else if (buildingAge > 10 && buildingAge < 21)
                        buildingAgePercentage = 0.9M;
                    else if (buildingAge > 20 && buildingAge < 36)
                        buildingAgePercentage = 0.8M;
                    else
                        buildingAgePercentage = 0.75M;

                    totalBuildingAgePrice = service.GetPricelistItemByRiskItemId(30).First().Price * service.GetPricelistItemByRiskItemId(30).First().Coefficient * buildingAgePercentage;
                }

                decimal estimatedValues = 0;
                decimal.TryParse(homeIns.EstimatedValue, out estimatedValues);
                decimal estimatedValuesPercentage = 0;
                decimal totalEstimatedValuesPrice = 0;

                if(estimatedValues != 0)
                {
                    if (estimatedValues < 101)
                        estimatedValuesPercentage = 1;
                    else if (estimatedValues > 100 && estimatedValues < 351)
                        estimatedValuesPercentage = 0.9M;
                    else if (estimatedValues > 350 && estimatedValues < 951)
                        estimatedValuesPercentage = 0.8M;
                    else
                        estimatedValuesPercentage = 0.7M;

                    totalEstimatedValuesPrice = service.GetPricelistItemByRiskItemId(31).First().Price * service.GetPricelistItemByRiskItemId(31).First().Coefficient * estimatedValuesPercentage;
                }

                var insuredFromPrice = homeIns.InsuredFrom != 0 ? service.GetPricelistItemByRiskItemId(homeIns.InsuredFrom).First().Price * service.GetPricelistItemByRiskItemId(homeIns.InsuredFrom).First().Coefficient : 0.0M;

                totalPrice = insuredFromPrice + totalSurfaceAreaPrice + totalBuildingAgePrice + totalEstimatedValuesPrice;
            }

            return Math.Round(durationPriceTotal * totalPrice, 2);
        }
    }
}