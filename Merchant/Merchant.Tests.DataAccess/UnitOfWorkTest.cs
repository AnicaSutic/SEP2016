using System;
using System.Linq;
using Merchant.DataAccess;
using Merchant.DataAccess.Repository;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Merchant.Tests.DataAccess
{
    [TestClass]
    public class UnitOfWorkTest
    {
        [TestMethod]
        public void AddNewBuyerTest()
        {
            var unitOfWork = new UnitOfWork();
            bool insertSuccessful;
            var newBuyer = new Buyer
            {
                Name = "Testname",
                Surname = "Testsurname"
            };
            try
            {
                unitOfWork.BuyerRepository.Insert(newBuyer);
                unitOfWork.Save();
                insertSuccessful = true;
            }
            catch(Exception ex)
            {
                insertSuccessful = false;
                Console.WriteLine(ex.Message);
            }

            Assert.AreEqual(true, insertSuccessful);
        }

        [TestMethod]
        public void GetBuyersTest()
        {
            var unitOfWork = new UnitOfWork();
            var buyers = unitOfWork.BuyerRepository.Get();
            Assert.AreNotEqual(0, buyers.Count());
        }
    }
}
