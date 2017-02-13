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
                Surname = "Testsurname",
                IdentificationNumber = "1234567890987",
                PassportNumber = "7654345",
                Address = "Testaddress",
                TelephoneNumber = "065443332",
                Email = "test@email"

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

        [TestMethod]
        public void GetBuyerbyIdTest()
        {
            var unitOfWork = new UnitOfWork();
            var buyer = unitOfWork.BuyerRepository.GetById(1);
            Assert.AreEqual("Testname", buyer.Name);
        }

        [TestMethod]
        public void DeleteByuerTest()
        {
            var unitOfWork = new UnitOfWork();
            var buyers = unitOfWork.BuyerRepository.Get();
            unitOfWork.BuyerRepository.Delete(1);
            var noBuyers = unitOfWork.BuyerRepository.Get();
            Assert.AreEqual(buyers.Count(), noBuyers.Count());
        }
    }
}
