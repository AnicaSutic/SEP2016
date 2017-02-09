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

        [TestMethod]
        public void GetRiskByNameTest()
        {
            var service = new RiskService();
            var riskItem = service.GetRiskByName("Sport");

            Assert.AreEqual("Sport", riskItem.Name);
        }

        [TestMethod]
        public void GetAllRisksTest()
        {
            var service = new RiskService();
            var allRisks = service.GetAllRisks();

            Assert.AreNotEqual(0, allRisks);
        }
    }
}
