using System;
using System.Linq;
using Merchant.Business;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Merchant.Tests.Business
{
    [TestClass]
    public class RiskServiceTests
    {
        [TestMethod]
        public void GetRisksByCategoryTest()
        {
            var service = new RiskService();
            var risks = service.GetRiskByCategory(1);

            Assert.AreEqual(2, risks.Count());
        }
    }
}
