using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PCC.Models
{
    public class PaymentRequestDetails
    {
        public string OrderId { get; set; }
        public double Price { get; set; }
    }
}