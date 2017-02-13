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
    public class CreditCardController : ApiController
    {
        // GET: api/CreditCard
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/CreditCard/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CreditCard
        public CreditCard Post(CreditCardDetails creditCardDetails)
        {
            var apiContext = PaypalConfiguration.GetApiContext();

            // A resource representing a credit card that can be used to fund a payment.
            var card = new CreditCard()
            {
                expire_month = int.Parse(creditCardDetails.ExpirationMonth),
                expire_year = int.Parse(creditCardDetails.ExpirationYear),
                number = creditCardDetails.CardNumber,
                type = "visa",
                cvv2 = creditCardDetails.Cvv,
            };

            var createdCard = card.Create(apiContext);

            return CreditCard.Get(apiContext, createdCard.id);
        }

        // PUT: api/CreditCard/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CreditCard/5
        public void Delete(int id)
        {
        }
    }
}
