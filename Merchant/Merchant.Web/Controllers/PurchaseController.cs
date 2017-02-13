using Common;
using Merchant.Business;
using Merchant.DataAccess;
using Merchant.Web.Filters;
using Merchant.Web.Helpers;
using Microsoft.Security.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.WebPages;

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
        [CustomValidateAntiForgeryToken]
        public ActionResult BuyInsurance(InsuranceDetailsDto insurance)
        {
            var serializer = new JavaScriptSerializer();

            if (insurance.Type == "Travel")
            {
                TravelInsuranceDto travelInsurance = serializer.Deserialize<TravelInsuranceDto>(insurance.Data);
                TravelInsuranceDto newTravelInsurance = Serializer.SerializeAndConvert(travelInsurance) as TravelInsuranceDto;
                Session["travelInsurance"] = newTravelInsurance;
            }

            if (insurance.Type == "Home")
            {
                HomeInsuranceDto homeInsurance = serializer.Deserialize<HomeInsuranceDto>(insurance.Data);
                HomeInsuranceDto newHomeInsurance = Serializer.SerializeAndConvert(homeInsurance) as HomeInsuranceDto;

                TravelInsuranceDto travelInsurance = Session["travelInsurance"] as TravelInsuranceDto;
                newHomeInsurance.StartDate = travelInsurance.StartDate;
                newHomeInsurance.EndDate = travelInsurance.EndDate;

                Session["homeInsurance"] = newHomeInsurance;
            }

            if (insurance.Type == "Vehicle")
            {
                VehicleInsuranceDto vehicleInsurance = serializer.Deserialize<VehicleInsuranceDto>(insurance.Data);
                VehicleInsuranceDto newVehicleInsurance = Serializer.SerializeAndConvert(vehicleInsurance) as VehicleInsuranceDto;

                TravelInsuranceDto travelInsurance = Session["travelInsurance"] as TravelInsuranceDto;
                newVehicleInsurance.StartDate = travelInsurance.StartDate;
                newVehicleInsurance.EndDate = travelInsurance.EndDate;

                Session["vehicleInsurance"] = newVehicleInsurance;
            }

            return null;
        }

        [HttpPost]
        [CustomValidateAntiForgeryToken]
        public ActionResult AddInsurants(List<InsurantDto> insurantsDto)
        {
            InsuranceService service = new InsuranceService();
            RiskItemService riskItemService = new RiskItemService();
            RiskCategoryService riskCategoryService = new RiskCategoryService();

            TravelInsuranceDto travelInsurance = Session["travelInsurance"] as TravelInsuranceDto;
            TravelInsuranceDto newTravelInsurance = travelInsurance != null
                ? Serializer.SerializeAndConvert(travelInsurance) as TravelInsuranceDto
                : null;

            VehicleInsuranceDto vehicleInsurance = Session["vehicleInsurance"] as VehicleInsuranceDto;
            VehicleInsuranceDto newVehicleInsurance = vehicleInsurance != null
                ? Serializer.SerializeAndConvert(vehicleInsurance) as VehicleInsuranceDto
                : null;

            HomeInsuranceDto homeInsurance = Session["homeInsurance"] as HomeInsuranceDto;
            HomeInsuranceDto newHomeInsurance = homeInsurance != null
                ? Serializer.SerializeAndConvert(homeInsurance) as HomeInsuranceDto
                : null;

            decimal travelPrice = newTravelInsurance != null ? newTravelInsurance.Price : 0.0M;
            decimal vehiclePrice = newVehicleInsurance != null ? newVehicleInsurance.Price : 0.0M;
            decimal homePrice = newHomeInsurance != null ? newHomeInsurance.Price : 0.0M;

            decimal policyPrice = travelPrice + vehiclePrice + homePrice;

            InsurancePolicy policy = new InsurancePolicy
            {
                IsPaymentSuccessful = false,
                Price = policyPrice,
                OrderId = Guid.NewGuid().ToString()
            };

            service.AddPolicy(policy);

            Voyage voyage = new Voyage
            {
                InsurantAge = riskItemService.GetRiskItemNameById(newTravelInsurance.Age),
                InsuredValue = riskItemService.GetRiskItemNameById(newTravelInsurance.InsuredValue),
                NumberOfInsurants = int.Parse(newTravelInsurance.NumberOfInsurants),
                Region = riskItemService.GetRiskItemNameById(newTravelInsurance.Region),
                Sport = newTravelInsurance.Sport != 0 ? riskItemService.GetRiskItemNameById(newTravelInsurance.Sport) : string.Empty
            };

            service.AddVoyage(voyage);

            Insurance insuranceTravel = new Insurance
            {
                EndDate = newTravelInsurance.EndDate,
                Price = newTravelInsurance.Price,
                Voyage = voyage,
                InsurancePolicy = policy,
                RiskCategory = riskCategoryService.GetById(1),
                StartDate = newTravelInsurance.StartDate
            };

            service.AddInsurance(insuranceTravel);

            if (newHomeInsurance != null)
            {
                ResidentalBuilding building = new ResidentalBuilding
                {
                    Address = newHomeInsurance.Address,
                    BuildingAge = decimal.Parse(newHomeInsurance.BuildingAge),
                    EstimatedValue = decimal.Parse(newHomeInsurance.EstimatedValue),
                    InsuredFrom = riskItemService.GetRiskItemNameById(newHomeInsurance.InsuredFrom),
                    SurfaceArea = decimal.Parse(newHomeInsurance.SurfaceArea),
                    Owner = new Owner
                    {
                        Name = newHomeInsurance.OwnerName,
                        Surname = newHomeInsurance.OwnerSurname,
                        IdentificationNumber = newHomeInsurance.OwnerIdentificationNumber
                    }
                };

                service.AddResidentalBuilding(building);

                Insurance insuranceHome = new Insurance
                {
                    EndDate = newHomeInsurance.EndDate,
                    Price = newHomeInsurance.Price,
                    InsurancePolicy = policy,
                    RiskCategory = riskCategoryService.GetById(2),
                    StartDate = newHomeInsurance.StartDate,
                    ResidentalBuilding = building
                };

                service.AddInsurance(insuranceHome);
            }

            if (newVehicleInsurance != null)
            {
                Vehicle vehicle = new Vehicle
                {
                    Brand = newVehicleInsurance.Brand,
                    ChassisNumber = newVehicleInsurance.ChassisNumber,
                    LicensePlateNumber = newVehicleInsurance.LicensePlateNumber,
                    YearOfProduction = int.Parse(newVehicleInsurance.YearOfProduction.ToString()),
                    Type = newVehicleInsurance.Type,
                    Package = riskItemService.GetRiskItemNameById(newVehicleInsurance.Package),
                    Owner = new Owner
                    {
                        Name = newVehicleInsurance.OwnerName,
                        Surname = newVehicleInsurance.OwnerSurname,
                        IdentificationNumber = newVehicleInsurance.OwnerIdentificationNumber
                    }
                };

                service.AddVehicle(vehicle);

                Insurance insuranceVehicle = new Insurance
                {
                    EndDate = newVehicleInsurance.EndDate,
                    Price = newVehicleInsurance.Price,
                    InsurancePolicy = policy,
                    RiskCategory = riskCategoryService.GetById(3),
                    StartDate = newVehicleInsurance.StartDate,
                    Vehicle = vehicle
                };

                service.AddInsurance(insuranceVehicle);
            }

            Buyer buyer = null;

            foreach (InsurantDto ins in insurantsDto)
            {
                if (ins.IsBuyer)
                {
                    buyer = new Buyer
                    {
                        Address = Sanitizer.GetSafeHtmlFragment(ins.Address),
                        Email = Sanitizer.GetSafeHtmlFragment(ins.Email),
                        IdentificationNumber = Sanitizer.GetSafeHtmlFragment(ins.IdentificationNumber),
                        Name = Sanitizer.GetSafeHtmlFragment(ins.Name),
                        PassportNumber = Sanitizer.GetSafeHtmlFragment(ins.PassportNumber),
                        Surname = Sanitizer.GetSafeHtmlFragment(ins.Surname),
                        TelephoneNumber = Sanitizer.GetSafeHtmlFragment(ins.TelephoneNumber)
                    };

                    service.AddBuyer(buyer);
                }

                Insurant insurant = new Insurant
                {
                    IdentificationNumber = Sanitizer.GetSafeHtmlFragment(ins.IdentificationNumber),
                    Address = Sanitizer.GetSafeHtmlFragment(ins.Address),
                    Name = Sanitizer.GetSafeHtmlFragment(ins.Name),
                    PassportNumber = Sanitizer.GetSafeHtmlFragment(ins.PassportNumber),
                    Surname = Sanitizer.GetSafeHtmlFragment(ins.Surname),
                    TelephoneNumber = Sanitizer.GetSafeHtmlFragment(ins.TelephoneNumber),
                    InsurancePolicy = policy
                };

                service.AddInsurant(insurant);
            }

            if (buyer != null)
            {
                policy.Buyer = buyer;
                service.UpdatePolicy(policy);
            }

            return Json(new
            {
                isSuccessful = true,
                orderId = policy.OrderId,
                price = policy.Price
            });

        }
    }
}