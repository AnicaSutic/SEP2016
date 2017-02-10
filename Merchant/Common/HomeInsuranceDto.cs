using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class HomeInsuranceDto : InsuranceDto
    {
        public string Address { get; set; }
        public string SurfaceArea {get; set;}
        public string BuildingAge {get; set;}
        public string EstimatedValue {get; set;}
        public int InsuredFrom {get; set;}
        public string OwnerName {get; set;}
        public string OwnerSurname {get; set;}
        public string OwnerIdentificationNumber {get; set;}
    }
}
