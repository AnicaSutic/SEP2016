using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PayPal.Api;
using PCC.Business;
using PCC.Models;

namespace PCC.Controllers
{

    public class TestData
    {
        public string Amount { get; set; }
        public string OrderId { get; set; }
    }
    public class PaymentUrlController : ApiController
    {
        // GET: api/PaymentUrl
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/PaymentUrl/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PaymentUrl
        public Links Post(TestData data)
        {
            var apiContext = PaypalConfiguration.GetApiContext();

            var details = new Details
            {
                shipping = "0",
                subtotal = data.Amount,
                tax = "0",
            };

            var amount = new Amount
            {
                currency = "USD",
                total = data.Amount,
                details = details,
            };

            var transaction = new Transaction
            {
                amount = amount,
                invoice_number = Common.GetRandomInvoiceNumber()
            };

            var transactions = new List<Transaction> { transaction };


            var payer = new Payer
            {
                payment_method = "paypal"
            };

            var redirUrls = new RedirectUrls()
            {
                cancel_url = "blabla" + "&cancel=true",
                return_url = "blabla"
            };

            var paymet = new Payment
            {
                intent = "sale",
                payer = payer,
                transactions = transactions,
                redirect_urls =  redirUrls
            };

            var createdPayment = paymet.Create(apiContext);

            var links = createdPayment.links.GetEnumerator();
            while (links.MoveNext())
            {
                var link = links.Current;
                if (link.rel.ToLower().Trim().Equals("approval_url"))
                {
                    return link;
                }
            }
            return null;


            //try
            //{
            //    var apiContext = Models.Configuration.GetApiContext();
            //    var createPayment = paymet.Create(apiContext);

            //    if (createPayment.state.ToLower() != "approved")
            //    {
            //        return new PaymentResponse
            //        {
            //            TransactionSuccessful = false,
            //            Message = null
            //        };
            //    }
            //}
            //catch (PayPal.PayPalException ex)
            //{
            //    return new PaymentResponse
            //    {
            //        TransactionSuccessful = false,
            //        Message = ex.InnerException?.Message
            //    };
            //}
            //return new PaymentResponse
            //{
            //    TransactionSuccessful = true,
            //    Message = null
            //};
        }

        // PUT: api/PaymentUrl/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PaymentUrl/5
        public void Delete(int id)
        {
        }
    }
}
