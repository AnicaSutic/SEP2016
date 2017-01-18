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
        public static readonly string priceRulePath = "Merchant.Business.Rules.PriceCalculatingRule.drl";
        public org.drools.FactHandle _currentCust = null;
        public WorkingMemory workingMemory;
        public RuleBase ruleBase;
        public InsuranceDto workingInsuranceDtoObj;

        public void InitializeEngine(string drlFilePath)
        {
            PackageBuilder builder = new PackageBuilder();
            //Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(drlFilePath);
            Stream stream = this.GetType().GetTypeInfo().Assembly.GetManifestResourceStream(drlFilePath);
            builder.AddPackageFromDrl(drlFilePath, stream);
            Package pkg = builder.GetPackage();
            ruleBase = RuleBaseFactory.NewRuleBase();
            ruleBase.AddPackage(pkg);
            workingMemory = ruleBase.NewWorkingMemory();
        }

        public decimal GetCalculatedPrice(PriceDto dto)
        {
            InitializeEngine(priceRulePath);

            if (_currentCust == null)
                _currentCust = workingMemory.assertObject(dto);
            else
                workingMemory.modifyObject(_currentCust, dto);

            workingMemory.fireAllRules();
            PriceDto newDto = (PriceDto)workingMemory.getObject(_currentCust);

            return newDto.CalculatedPrice;
        }


    }
}