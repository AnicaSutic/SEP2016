//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Merchant.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class RiskItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Name_Srb { get; set; }
        public int RiskId { get; set; }
    
        public virtual Risk Risk { get; set; }
    }
}
