using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class VehicleInsuranceDto : InsuranceDto
    {
        public string Brand { get; set; }
        public string Type { get; set; }
        public int YearOfProduction { get; set; }
        public string LicensePlateNumber { get; set; }
        public string ChassisNumber { get; set; }
        public int Package { get; set; }
        public string OwnerName { get; set; }
        public string OwnerSurname { get; set; }
        public string OwnerIdentificationNumber { get; set; }
        public string TowingKm { get; set; }
        public string RepairPrice { get; set; }
        public string AccommodationDays { get; set; }
    }
}
