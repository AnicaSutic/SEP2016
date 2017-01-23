using System.Collections.Generic;
using System.Linq;
using Merchant.DataAccess;
using Merchant.DataAccess.Repository;

namespace Merchant.Business
{
    public class RiskItemService
    {
        private readonly GenericRepository<RiskItem> _repository;

        public RiskItemService()
        {
            _repository = new UnitOfWork().RiskItemRepository;
        }

        public IEnumerable<RiskItem> GetRiskItemsByRiskName(string name)
        {
            return _repository.Get(r => r.Risk.Name == name).ToList();
        }

        public IEnumerable<RiskItem> GetAllRiskItems()
        {
            return _repository.Get().ToList();
        }
    }
}
