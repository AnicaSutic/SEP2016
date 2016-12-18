using Merchant.DataAccess;
using Merchant.DataAccess.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Merchant.Business
{
    public class PriceListItemService
    {
        private readonly GenericRepository<PricelistItem> _repository;

        public PriceListItemService()
        {
            _repository = new UnitOfWork().PricelistItemRepository;
        }

        public List<PricelistItem> GetPricelistItemByRiskItemId(int id)
        {
            var list = _repository.Get(pli => pli.RiskItemId == id).ToList();
            return list;
        }
    }
}
