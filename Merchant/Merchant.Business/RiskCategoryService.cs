using Merchant.DataAccess.Repository;
using System.Collections.Generic;
using System.Linq;
using Merchant.DataAccess;

namespace Merchant.Business
{
    public class RiskCategoryService
    {
        private readonly GenericRepository<RiskCategory> _repository;

        public RiskCategoryService()
        {
            _repository = new UnitOfWork().RiskCategoryRepository;
        }

        public IEnumerable<RiskCategory> GetOtherRiskCategories()
        {
            return _repository.Get(c => c.Name != "Travel").ToList();
        }

        public IEnumerable<RiskCategory> GetAllRiskCategories()
        {
            return _repository.Get().ToList();
        }

        public RiskCategory GetById(int id)
        {
            return _repository.GetById(id);
        }

    }
}
