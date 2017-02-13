using Common;
using Merchant.Business;
using Merchant.DataAccess;
using Merchant.Web.Helpers;
using Microsoft.Security.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

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
            var serializer = new JavaScriptSerializer();

            if (insurance.Type == "Travel")
            {
                TravelInsuranceDto travelInsurance = serializer.Deserialize<TravelInsuranceDto>(insurance.Data);
                TravelInsuranceDto newTravelInsurance = Serializer.SerializeAndConvert(travelInsurance) as TravelInsuranceDto;
                Session["travelInsurance"] = newTravelInsurance;
            }

            if(insurance.Type == "Home")
            {
                HomeInsuranceDto homeInsurance = serializer.Deserialize<HomeInsuranceDto>(insurance.Data);
                HomeInsuranceDto newHomeInsurance = Serializer.SerializeAndConvert(homeInsurance) as HomeInsuranceDto;
                Session["homeInsurance"] = newHomeInsurance;
            }

            if(insurance.Type == "Vehicle")
            {
                VehicleInsuranceDto vehicleInsurance = serializer.Deserialize<VehicleInsuranceDto>(insurance.Data);
                VehicleInsuranceDto newVehicleInsurance = Serializer.SerializeAndConvert(vehicleInsurance) as VehicleInsuranceDto;
                Session["vehicleInsurance"] = newVehicleInsurance;
            }

            return null;
        }

        [HttpPost]
        public ActionResult AddInsurants(List<InsurantDto> insurantsDto)
        {
            InsuranceService service = new InsuranceService();
            RiskItemService riskItemService = new RiskItemService();
            RiskCategoryService riskCategoryService = new RiskCategoryService();

            TravelInsuranceDto travelInsurance = Session["travelInsurance"] as TravelInsuranceDto;
            TravelInsuranceDto newTravelInsurance = Serializer.SerializeAndConvert(travelInsurance) as TravelInsuranceDto;

            VehicleInsuranceDto vehicleInsurance = Session["vehicleInsurance"] as VehicleInsuranceDto;
            VehicleInsuranceDto newVehicleInsurance = Serializer.SerializeAndConvert(vehicleInsurance) as VehicleInsuranceDto;

            HomeInsuranceDto homeInsurance = Session["homeInsurance"] as HomeInsuranceDto;
            HomeInsuranceDto newHomeInsurance = Serializer.SerializeAndConvert(homeInsurance) as HomeInsuranceDto;

            decimal travelPrice = travelInsurance != null ? travelInsurance.Price : 0.0M;
            decimal vehiclePrice = vehicleInsurance != null ? vehicleInsurance.Price : 0.0M;
            decimal homePrice = homeInsurance != null ? homeInsurance.Price : 0.0M;

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
                InsurantAge = riskItemService.GetRiskItemNameById(travelInsurance.Age),
                InsuredValue = riskItemService.GetRiskItemNameById(travelInsurance.InsuredValue),
                NumberOfInsurants = int.Parse(travelInsurance.NumberOfInsurants),
                Region = riskItemService.GetRiskItemNameById(travelInsurance.Region),
                Sport = travelInsurance.Sport != 0 ? riskItemService.GetRiskItemNameById(travelInsurance.Sport) : ""
            };

            service.AddVoyage(voyage);

            Insurance insuranceTravel = new Insurance
            {
                EndDate = travelInsurance.EndDate,
                Price = travelInsurance.Price,
                Voyage = voyage,
                InsurancePolicy = policy,
                RiskCategory = riskCategoryService.GetById(1),
                StartDate = travelInsurance.StartDate
            };
           
            service.AddInsurance(insuranceTravel);

            if (homeInsurance != null)
            { 
                ResidentalBuilding building = new ResidentalBuilding
                {
                    Address = homeInsurance.Address,
                    BuildingAge = decimal.Parse(homeInsurance.BuildingAge),
                    EstimatedValue = decimal.Parse(homeInsurance.EstimatedValue),
                    InsuredFrom = riskItemService.GetRiskItemNameById(homeInsurance.InsuredFrom),
                    SurfaceArea = decimal.Parse(homeInsurance.SurfaceArea),
                    Owner = new Owner
                    {
                        Name = homeInsurance.OwnerName,
                        Surname = homeInsurance.OwnerSurname,
                        IdentificationNumber = homeInsurance.OwnerIdentificationNumber
                    }
                };

                service.AddResidentalBuilding(building);

                Insurance insuranceHome = new Insurance
                {
                    EndDate = homeInsurance.EndDate,
                    Price = homeInsurance.Price,
                    InsurancePolicy = policy,
                    RiskCategory = riskCategoryService.GetById(2),
                    StartDate = homeInsurance.StartDate,
                    ResidentalBuilding = building
                };

                service.AddInsurance(insuranceHome);
            }

            if(vehicleInsurance != null)
            {
                Vehicle vehicle = new Vehicle
                {
                    Brand = vehicleInsurance.Brand,
                    ChassisNumber = vehicleInsurance.ChassisNumber,
                    LicensePlateNumber = vehicleInsurance.LicensePlateNumber,
                    YearOfProduction = int.Parse(vehicleInsurance.YearOfProduction.ToString()),
                    Type = vehicleInsurance.Type,
                    Package = riskItemService.GetRiskItemNameById(vehicleInsurance.Package),
                    Owner = new Owner
                    {
                        Name = vehicleInsurance.OwnerName,
                        Surname = vehicleInsurance.OwnerSurname,
                        IdentificationNumber = vehicleInsurance.OwnerIdentificationNumber
                    }
                };

                service.AddVehicle(vehicle);

                Insurance insuranceVehicle = new Insurance
                {
                    EndDate = vehicleInsurance.EndDate,
                    Price = vehicleInsurance.Price,
                    InsurancePolicy = policy,
                    RiskCategory = riskCategoryService.GetById(3),
                    StartDate = vehicleInsurance.StartDate,
                    Vehicle = vehicle
                };

                service.AddInsurance(insuranceVehicle);
            }

            Buyer buyer = null;

            foreach (InsurantDto ins in insurantsDto)
            {
                if(ins.IsBuyer)
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

            if(buyer != null) { 
                policy.Buyer = buyer;
                service.UpdatePolicy(policy);
            }

            return null;
        }
    }
}