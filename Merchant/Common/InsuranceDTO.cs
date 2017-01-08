using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class InsuranceDto
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Region { get; set; }
        public string NumberOfInsurants { get; set; }
        public int Age { get; set; }
        public int Sport { get; set; }
        public int InsuredValue { get; set; }
    }
}
