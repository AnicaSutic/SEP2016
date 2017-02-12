using PayPal.Api;
using PCC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using PCC.Business;

namespace PCC.Controllers
{
    public class PaymentController : ApiController
    {
        // GET: api/Payment
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Payment/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Payment
        public PaymentResponse Post(PaymentDetailsOld paymentDetails)
        {
            var creditCard = new CreditCard
            {
                cvv2 = paymentDetails.Cvv,
                expire_month = int.Parse(paymentDetails.ExpirationMonth),
                expire_year = int.Parse(paymentDetails.ExpirationYear),
                number = paymentDetails.CardNumber,
                type = "visa"
            };

            var details = new Details
            {
                shipping = "0",
                subtotal = paymentDetails.Amount,
                tax = "0",
            };

            var amount = new Amount
            {
                currency = "USD",
                total = paymentDetails.Amount,
                details = details,
            };

            var transaction = new Transaction
            {
                amount = amount,
                invoice_number = Common.GetRandomInvoiceNumber()
            };

            var transactions = new List<Transaction> {transaction};

            var fundingInstrument = new FundingInstrument {credit_card = creditCard};

            var fundingInstruments = new List<FundingInstrument> {fundingInstrument};

            var payer = new Payer
            {
                funding_instruments = fundingInstruments,
                payment_method = "credit_card"
            };

            var paymet = new Payment
            {
                intent = "sale",
                payer = payer,
                transactions = transactions
            };

            try
            {
                var apiContext = PaypalConfiguration.GetApiContext();
                var createPayment = paymet.Create(apiContext);

                if (createPayment.state.ToLower() != "approved")
                {
                    return new PaymentResponse
                    {
                        TransactionSuccessful = false,
                        Message = null
                    };
                }
            }
            catch (PayPal.PayPalException ex)
            {
                return new PaymentResponse
                {
                    TransactionSuccessful = false,
                    Message = ex.InnerException?.Message
                };
            }
            return new PaymentResponse
            {
                TransactionSuccessful = true,
                Message = null
            };
        }

        // PUT: api/Payment/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Payment/5
        public void Delete(int id)
        {
        }
        
        [HttpGet]
        public string Test()
        {
            return "success";
        }

        [HttpPost]
        public string TestPost(TestDto test)
        {
            return "success";
        }
    }

    public class TestDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }
}
