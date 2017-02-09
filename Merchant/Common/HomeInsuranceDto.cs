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
        public string SurfaceArea;
        public string BuildingAge;
        public int InsuredFrom;
        public string OwnerName;
        public string OwnerSurname;
        public string OwnerIdentificationNumber;
    }
}
