using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PCC.Models
{
    public class PaymentDetails : CreditCardDetails
    {
        public string Amount { get; set; }
    }
}