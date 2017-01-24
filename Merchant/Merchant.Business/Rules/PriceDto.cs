using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Merchant.Business.Rules
{
    public class PriceDto
    {
        public int Price { get; set; }
        public int Coefficient { get; set; }
        public int CalculatedPrice { get; set; }
    }
}
