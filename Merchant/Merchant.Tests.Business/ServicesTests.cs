using System;
using System.Linq;
using Merchant.Business;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Merchant.Tests.Business
{
    [TestClass]
    public class ServicesTests
    {

        // Unit tests for RiskService
        [TestMethod]
        public void GetRisksByCategoryTest()
        {
            var service = new RiskService();
            var risks = service.GetRiskByCategory(1);

            Assert.AreEqual(6, risks.Count());
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


        // Unit tests for RiskCategoryService
        [TestMethod]
        public void GetOtherRiskCategories()
        {
            var service = new RiskCategoryService();
            var otherRisks = service.GetOtherRiskCategories();

            Assert.AreEqual(2, otherRisks.Count());
            Assert.AreNotEqual("Home", otherRisks.ElementAt(1).Name);
        }

        [TestMethod]
        public void GetAllRiskCategories()
        {
            var service = new RiskCategoryService();
            var allRisks = service.GetAllRiskCategories();

            Assert.AreEqual(3, allRisks.Count());
        }

        // Unit tests for RiskItemService
        [TestMethod]
        public void GetRiskItemsByRiskName(string name)
        {
            var service = new RiskItemService();
            var riskItems = service.GetRiskItemsByRiskName("Age");

            Assert.AreEqual(3, riskItems.Count());
        }

        // Unit tests for PriceListItemService

        [TestMethod]
        public void GetAllPricelistItems()
        {
            var service = new PriceListItemService();
            var priceListItems = service.GetAllPricelistItems();

            Assert.AreNotEqual(0, priceListItems.Count());
        }
    }
}
