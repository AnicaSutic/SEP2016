using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PCC.Models
{
    public class CreditCardDetails
    {
        public string CardNumber { get; set; }
        public string Cvv { get; set; }
        public string ExpirationMonth { get; set; }
        public string ExpirationYear { get; set; }
    }
}