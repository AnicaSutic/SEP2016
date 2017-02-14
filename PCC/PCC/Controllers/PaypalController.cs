﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Results;
using PCC.Business;
using PCC.Models;

namespace PCC.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PaypalController : ApiController
    {
        private readonly PaypalService _paypalService = new PaypalService();

        [HttpPost]
        public IHttpActionResult GetPaymentUrl(PaymentRequestDetails paymentRequestDetails)
        {
            try
            {
                var link = _paypalService.CreatePayment(paymentRequestDetails.OrderId, paymentRequestDetails.Price);
                return Ok(link);
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error while submitting request for creating payment url: " + ex.Message);
                return BadRequest();
            }
        }

        public PaymentResponse ExecutePayment(PaymentDetails paymentDetails)
        {
            try
            {
                var transcationSucceessful = _paypalService.ExecutePayment(paymentDetails.PaymentId, paymentDetails.PayerId);
                if (transcationSucceessful)
                {
                    return new PaymentResponse { TransactionSuccessful = true, Message = "Transaction was successful" };
                }
                return new PaymentResponse { TransactionSuccessful = false, Message = "Transaction was not successful" };
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error while submitting request for payment execution: " + ex.Message);
                return new PaymentResponse { TransactionSuccessful = false, Message = "Transaction was not successful" };
            }
        }
    }
}
