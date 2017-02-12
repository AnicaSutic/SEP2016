﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using PCC.Business;
using PCC.Models;

namespace PCC.Controllers
{
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

        public IHttpActionResult ExecutePayment(PaymentDetails paymentDetails)
        {
            try
            {
                var transcationSucceessful = _paypalService.ExecutePayment(paymentDetails.PaymentId, paymentDetails.PayerId);
                if (transcationSucceessful)
                {
                    return Ok("Transaction was successful");
                }
                return BadRequest("Transaction was not successful");
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error while submitting request for payment execution: " + ex.Message);
                return BadRequest();
            }
        }
    }
}
