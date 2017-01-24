using org.drools.dotnet.compiler;
using org.drools.dotnet.rule;
using org.drools.dotnet;
using System.IO;
using System.Reflection;
using Common;

namespace Merchant.Business.Rules
{
    public class PriceCalculator
    {
        public static readonly string priceRulePath = "MerchanLt.Business.Rules.PriceCalculatingRule.drl";
        public org.drools.FactHandle _currentCust = null;
        public WorkingMemory workingMemory;
        public RuleBase ruleBase;
        public InsuranceDto workingInsuranceDtoObj;

        public void InitializeEngine()
        {
            PackageBuilder builder = new PackageBuilder();
            string[] results = Assembly.GetExecutingAssembly().GetManifestResourceNames();
            Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(results[1]);
            builder.AddPackageFromDrl(results[1], stream);
            Package pkg = builder.GetPackage();
            ruleBase = RuleBaseFactory.NewRuleBase();
            ruleBase.AddPackage(pkg);
            workingMemory = ruleBase.NewWorkingMemory();
        }

        public decimal GetCalculatedPrice(PriceDto dto)
        {
            InitializeEngine();

            if (_currentCust == null)
                _currentCust = workingMemory.assertObject(dto);
            else
                workingMemory.modifyObject(_currentCust, dto);

            workingMemory.fireAllRules();
            //PriceDto newDto = (PriceDto)workingMemory.getObject(_currentCust);

            return 0.0M;
        }


    }
}