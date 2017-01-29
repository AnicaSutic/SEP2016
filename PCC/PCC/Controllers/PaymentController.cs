using PayPal.Api;
using PCC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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
        public string Post(CreditCardDetails cardDetails)
        {
            Item item = new Item();
            item.name = "Demo Item";
            item.currency = "USD";
            item.price = "5";
            item.quantity = "1";
            item.sku = "sku";

            List<Item> items = new List<Item>();
            items.Add(item);
            ItemList itemList = new ItemList();
            itemList.items = items;

            Address billingAddress = new Address();
            billingAddress.city = "New York";
            billingAddress.country_code = "US";
            billingAddress.line1 = "23rd street kew gardens";
            billingAddress.postal_code = "43210";
            billingAddress.state = "NY";

            CreditCard creditCard = new CreditCard();
            creditCard.billing_address = billingAddress;
            creditCard.cvv2 = cardDetails.Cvv;
            creditCard.expire_month = int.Parse(cardDetails.ExpirationMonth);
            creditCard.expire_year = int.Parse(cardDetails.ExpirationYear);
            creditCard.first_name = "Aman";
            creditCard.last_name = "Thakur";
            creditCard.number = cardDetails.CardNumber;
            creditCard.type = "visa";

            Details details = new Details();
            details.shipping = "1";
            details.subtotal = "5";
            details.tax = "1";

            Amount amount = new Amount();
            amount.currency = "USD";
            amount.total = "7";
            amount.details = details;

            Transaction transaction = new Transaction();
            transaction.amount = amount;
            transaction.description = "Description about payment amount";
            transaction.item_list = itemList;
            transaction.invoice_number = Common.GetRandomInvoiceNumber();

            List<Transaction> transactions = new List<Transaction>();
            transactions.Add(transaction);

            FundingInstrument fundingInstrument = new FundingInstrument();
            fundingInstrument.credit_card = creditCard;

            List<FundingInstrument> fundingInstruments = new List<FundingInstrument>();
            fundingInstruments.Add(fundingInstrument);

            Payer payer = new Payer();
            payer.funding_instruments = fundingInstruments;
            payer.payment_method = "credit_card";

            Payment paymet = new Payment();
            paymet.intent = "sale";
            paymet.payer = payer;
            paymet.transactions = transactions;

            try
            {
                APIContext apiContext = Models.Configuration.GetApiContext();
                Payment createPayment = paymet.Create(apiContext);

                if (createPayment.state.ToLower() != "approved")
                {
                    return "failure";
                }
            }
            catch (PayPal.PayPalException ex)
            {
                //ILog log = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
                //log.Error("Error" + ex.Message);
                return "failure" + ex.Message;
            }
            return "success";
        }

        // PUT: api/Payment/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Payment/5
        public void Delete(int id)
        {
        }
    }
}
