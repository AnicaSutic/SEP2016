using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PCC.Models
{
    public class PaymentResponse
    {
        public bool TransactionSuccessful { get; set; }
        public string Message { get; set; }
    }
}