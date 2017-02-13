using Common;
using Merchant.Business;
using Merchant.DataAccess;
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

            insurance.Data = Sanitizer.GetSafeHtmlFragment(insurance.Data);
            var serializer = new JavaScriptSerializer();

            if (insurance.Type == "Travel")
            {
                Session["travelInsurance"] = serializer.Deserialize<TravelInsuranceDto>(insurance.Data);
            }

            if(insurance.Type == "Home")
            {
                Session["homeInsurance"] = serializer.Deserialize<HomeInsuranceDto>(insurance.Data);
            }

            if(insurance.Type == "Vehicle")
            {
                Session["vehicleInsurance"] = serializer.Deserialize<VehicleInsuranceDto>(insurance.Data);
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
            VehicleInsuranceDto vehicleInsurance = Session["vehicleInsurance"] as VehicleInsuranceDto;
            HomeInsuranceDto homeInsurance = Session["homeInsurance"] as HomeInsuranceDto;

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
                InsurantAge = (riskItemService.GetRiskItemNameById(travelInsurance.Age)),
                InsuredValue = riskItemService.GetRiskItemNameById(travelInsurance.InsuredValue),
                NumberOfInsurants = int.Parse(Sanitizer.GetSafeHtmlFragment(travelInsurance.NumberOfInsurants)),
                Region = Sanitizer.GetSafeHtmlFragment(riskItemService.GetRiskItemNameById(travelInsurance.Region)),
                Sport = travelInsurance.Sport != 0 ? Sanitizer.GetSafeHtmlFragment(riskItemService.GetRiskItemNameById(travelInsurance.Sport)) : ""
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
                    Address = Sanitizer.GetSafeHtmlFragment(homeInsurance.Address),
                    BuildingAge = decimal.Parse(Sanitizer.GetSafeHtmlFragment(homeInsurance.BuildingAge)),
                    EstimatedValue = decimal.Parse(Sanitizer.GetSafeHtmlFragment(homeInsurance.EstimatedValue)),
                    InsuredFrom = Sanitizer.GetSafeHtmlFragment(riskItemService.GetRiskItemNameById(homeInsurance.InsuredFrom)),
                    SurfaceArea = decimal.Parse(Sanitizer.GetSafeHtmlFragment(homeInsurance.SurfaceArea)),
                    Owner = new Owner
                    {
                        Name = Sanitizer.GetSafeHtmlFragment(homeInsurance.OwnerName),
                        Surname = Sanitizer.GetSafeHtmlFragment(homeInsurance.OwnerSurname),
                        IdentificationNumber = Sanitizer.GetSafeHtmlFragment(homeInsurance.OwnerIdentificationNumber)
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
                    Brand = Sanitizer.GetSafeHtmlFragment(vehicleInsurance.Brand),
                    ChassisNumber = Sanitizer.GetSafeHtmlFragment(vehicleInsurance.ChassisNumber),
                    LicensePlateNumber = Sanitizer.GetSafeHtmlFragment(vehicleInsurance.LicensePlateNumber),
                    YearOfProduction = int.Parse(Sanitizer.GetSafeHtmlFragment(vehicleInsurance.YearOfProduction.ToString())),
                    Type = Sanitizer.GetSafeHtmlFragment(vehicleInsurance.Type),
                    Package = Sanitizer.GetSafeHtmlFragment(riskItemService.GetRiskItemNameById(vehicleInsurance.Package)),
                    Owner = new Owner
                    {
                        Name = Sanitizer.GetSafeHtmlFragment(vehicleInsurance.OwnerName),
                        Surname = Sanitizer.GetSafeHtmlFragment(vehicleInsurance.OwnerSurname),
                        IdentificationNumber = Sanitizer.GetSafeHtmlFragment(vehicleInsurance.OwnerIdentificationNumber)
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