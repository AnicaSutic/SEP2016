using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class InsurantDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string IdentificationNumber { get; set; }
        public string PassportNumber { get; set; }
        public string Address { get; set; }
        public string TelephoneNumber { get; set; }
        public string Email { get; set; }
        public bool IsBuyer { get; set; }
        public bool IsInsurant { get; set; }
    }
}
