﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;
using Merchant.DataAccess;
using Merchant.DataAccess.Repository;

namespace Merchant.Business
{
    public class RiskService
    {
        private readonly GenericRepository<Risk> _repository;

        public RiskService()
        {
            _repository = new UnitOfWork().RiskRepository;
        }

        public IEnumerable<Risk> GetRiskByCategory(int categoryId)
        {
            return _repository.Get(r => r.RiskCategory.Id == categoryId).ToList();
        }

        public Risk GetRiskByName(string name)
        {
            return _repository.Get(r => r.Name == name).First();
        }

        public object GetAllRisks()
        {
            return _repository.Get().ToList();
        }
    }
}
