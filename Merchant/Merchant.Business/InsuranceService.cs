using Merchant.DataAccess;
using Merchant.DataAccess.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Merchant.Business
{
    public class InsuranceService
    {
        private readonly UnitOfWork _unitOfWork = new UnitOfWork();

        private readonly GenericRepository<Insurance> _insuranceRepository;
        private readonly GenericRepository<Insurant> _insurantRepository;
        private readonly GenericRepository<Voyage> _voyageRepository;
        private readonly GenericRepository<Buyer> _buyerRepository;
        private readonly GenericRepository<InsurancePolicy> _policyRepository;
        private readonly GenericRepository<ResidentalBuilding> _buildingRepository;
        private readonly GenericRepository<Vehicle> _vehicleRepository;

        public InsuranceService()
        {
            _insuranceRepository = _unitOfWork.InsuranceRepository;
            _insurantRepository = _unitOfWork.InsurantRepository;
            _voyageRepository = _unitOfWork.VoyageRepository;
            _buyerRepository = _unitOfWork.BuyerRepository;
            _policyRepository = _unitOfWork.InsurancePolicyRepository;
            _buildingRepository = _unitOfWork.ResidentialBuildingRepository;
            _vehicleRepository = _unitOfWork.VehicleRepository;
        }

        public void AddPolicy(InsurancePolicy policy)
        {
            _policyRepository.Insert(policy);
            _unitOfWork.Save();
        }

        public void AddInsurant(Insurant insurant)
        {
            _insurantRepository.Insert(insurant);
            _unitOfWork.Save();
        }

        public void AddVoyage(Voyage voyage)
        {
            _voyageRepository.Insert(voyage);
            _unitOfWork.Save();
        }

        public void AddResidentalBuilding(ResidentalBuilding building)
        {
            _buildingRepository.Insert(building);
            _unitOfWork.Save();
        }

        public void AddVehicle(Vehicle vehicle)
        {
            _vehicleRepository.Insert(vehicle);
            _unitOfWork.Save();
        }

        public void AddInsurance(Insurance insurance)
        {
            _insuranceRepository.Insert(insurance);
            _unitOfWork.Save();
        }

        public void AddBuyer(Buyer buyer)
        {
            _buyerRepository.Insert(buyer);
            _unitOfWork.Save();
        }

        public List<InsurancePolicy> GetAllPolices()
        {
            return _policyRepository.Get().ToList();
        }

        public void UpdatePolicy(InsurancePolicy policy)
        {
            _policyRepository.Update(policy);
            _unitOfWork.Save();
        }

        public InsurancePolicy GetPolicyByOrderId(string orderId)
        {
            return _policyRepository.Get(p => p.OrderId == orderId).FirstOrDefault();
        }
    }
}
