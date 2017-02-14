using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;
using PayPal;
using PayPal.Api;
using PayPal.Log;

namespace PCC.Business
{
    public class PaypalService
    {
        private readonly APIContext _apiContext = PaypalConfiguration.GetApiContext();
        public string CreatePayment(string orderId, double price)
        {
            var details = new Details
            {
                shipping = "0",
                subtotal = price.ToString(CultureInfo.InvariantCulture),
                tax = "0",
            };

            var amount = new Amount
            {
                currency = "USD",
                total = price.ToString(CultureInfo.InvariantCulture),
                details = details,
            };

            var transaction = new Transaction
            {
                amount = amount,
            };

            var transactions = new List<Transaction> { transaction };


            var payer = new Payer
            {
                payment_method = "paypal"
            };

            var redirUrls = new RedirectUrls()
            {
                return_url = PaypalConfiguration.RedirectUrl+"?orderId="+orderId,
                cancel_url = PaypalConfiguration.CancelUrl+"&orderId="+orderId
            };

            var paymet = new Payment
            {
                intent = "sale",
                payer = payer,
                transactions = transactions,
                redirect_urls = redirUrls
            };

            try
            {
                var createdPayment = paymet.Create(_apiContext);
                var links = createdPayment.links.GetEnumerator();
                while (links.MoveNext())
                {
                    var link = links.Current;
                    if (link.rel.ToLower().Trim().Equals("approval_url"))
                    {
                        return link.href;
                    }
                }
            }
            catch (PayPalException ex)
            {
                Debug.WriteLine("Error while creating payment url: " + ex.Message);
            }
            return null;
        }

        public bool ExecutePayment(string paymentId, string payerId)
        {
            var payment = new Payment
            {
                id = paymentId
            };

            var paymentExecution = new PaymentExecution
            {
                payer_id = payerId,
            };

            try
            {
                var executedPayment = payment.Execute(_apiContext, paymentExecution);
                return true;
            }
            catch (PayPalException ex)
            {
                Debug.WriteLine("Error while payment execution: " + ex.Message);
                return false;
            }
        }
    }
}
