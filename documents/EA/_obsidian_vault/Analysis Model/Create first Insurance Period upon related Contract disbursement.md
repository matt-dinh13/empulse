---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Business Rules"
domain: "Analysis Model"
element_id: 1876162
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Create first Insurance Period upon related Contract disbursement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Business Rules

## 📝 Notes

This rule describes establishing the first Insurance Period based on the related Contract disbursement and its financial parameters. The rule is used for SAI contract type whose insurance activation is triggered by a related contract disbursement confirmation (Cash Loan).
Inputs:

	
- Contract
	
- RelatedContract
	
- InsuranceContract
	
- ServiceDefinition


Steps:

	
- System determines Insurance Period according to business rule Determine first insurance period with following parameters:
- ServiceDefinition -- insurance service which is being processed
- term = Contract.Financial Parameters.Term 
- disbursement date = current date
- last repayment date = Contract.Financial Parameters.Expected End Date
	
- System calculates SumInsured for the Insurance Period by the rules:
- Algorithm: Find tariff items by usage with parameters: Contract, Contract.Contract Service and usage_type='SI' (Sum Insured)
- If no Tariff Item found, then set Sum insured = 0 and continues with next step
- Algorithm: Calculate tariff item amount (with parameters Contract and Tariff Items found in previous step)
	
- System gets InsurancePremium for the Insurance as value of from RelatedContract.Financial Parameters.Provided Credit Amount -- for SAI contract, the Related Contract Provided Credit Amount (cash loan) = Insurance Premium
	
- System creates a new Insurance Period for the InsuranceContract using UC 11.020 Add insurance period with the InsuranceContract, Contract, insurance period start date, insurance period end date, SumInsured and InsurancePremium as parameters.
	
- Return to the calling use case

## 🔗 Connections (4)

- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → Dependency: [[Determine first insurance period]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- ← Dependency: [[{MOD}11.775 Activate Standalone Insurance on Cash Loan disbursement]]

## 📊 Appears In (3 diagrams)

- Custom: Insurance contract
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement
