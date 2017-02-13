using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Security.Application;
using Common;

namespace Merchant.Web.Helpers
{
    public class Serializer
    {
        public static InsuranceDto SerializeAndConvert(InsuranceDto insurance)
        {
            foreach(var property in insurance.GetType().GetProperties())
            {
                var value = property.GetValue(insurance, null);

                var newValue = Sanitizer.GetSafeHtmlFragment(value.ToString());

                int intValue = 0;
                decimal decimalValue = 0.0M;

                if (IsInt(value))
                {
                    int.TryParse(newValue, out intValue);
                }
                else if (IsDecimal(value))
                {
                    decimal.TryParse(newValue, out decimalValue);
                }

                property.SetValue(insurance, value);
            }

            return insurance;
        }

        public static bool IsInt(object value)
        {
            return value is int;
        }

        public static bool IsDecimal(object value)
        {
            return value is decimal;
        }
    }
}
