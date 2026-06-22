---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1879058
diagrams: 14
connections: 16
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Find tariff items by usage

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

Inputs:

	
- usageType (Tariff_Item_Type->Usage) - mandatory
	
- chargingPeriodicity - optional
	
- chargedToPrinciple - optional
	
- tariffVersion - optional
	
- contract - optional
	
- contractService - optional (reference to particular service assigned to contract)
	
- offer - optional
	
- offerService - optional (reference to particular service assigned to offer)

Either tariff version or contract (contract service) must be specified.

Note: This algorithm does not reflect setting of Tariff Item Groups.

Outputs:

	
- resultList of tariff items


Steps:

1. System finds list of Tariff Item Types where
-- TariffItemType.Usage = usageType and
-- TariffItemType.ChargingPeriodicity = chargingPeriodicity (checked if chargingPeriodicity is defined on input) and
-- (if chargedToPrinciple is defined on input then
---- get ToPrincipal as result of rule Is Flag on Tariff Item Type (TariffItemType, TO_PRINCIPAL)
---- ToPrincipal = chargedToPrinciple)
If no TariffItemType found then return empty resultList.

2. For each found TariffItemType
2.1. If tariffVersion parameter is not specified on input then system finds tariffVersion according to Algorithm: Find tariff by Current Tariff Use flag  with 

	
- TariffItemType


	
- contract
	
- contractService
	
- offer
	
- offerService

as parameters.
2.2 System finds in tariffVersion all TariffItems assigned to tariff where tariffVersion.TariffItem.TarifItemType = found TariffItemType and adds them to the resultList.
2.3 Continue with the next TariffItemType

3. System returns the resultList.

## 🔗 Connections (16)

- ← Dependency: [[Calculate Payment holiday financial parameters]]
- ← Dependency: [[08.110 Select insurance services (UseCase 1819535)]]
- ← Dependency: [[{MOD}03.120 Pay off installment schedule]]
- ← Dependency: [[GET tariff-items]]
- ← Dependency: [[08.050 Show Partial ER preview]]
- ← Dependency: [[Finalize paid part of installment schedule]]
- ← Dependency: [[Create first Insurance Period upon related Contract disbursement]]
- ← Dependency: [[Sum Insured calculation]]
- ← Dependency: [[Store offer data]]
- ← Dependency: [[Origination fees amount definition]]
- ← Dependency: [[Monthly fees amount definition]]
- ← Dependency: [[Service fees amount definition]]
- ← Dependency: [[{MOD}Fees determination]]
- → Dependency: [[Algorithm_ Find tariff by Current Tariff Use flag]]
- ← Dependency: [[{MOD}ALG_Early repayment calculation A1]]
- ← Dependency: [[11.081 Prolong insurance contracts]]

## 📊 Appears In (14 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Custom: Calculate product offer
- Custom: Eligible Insurance Service
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement
- Use Case: Common for Early repayment Request and Processing 
- Use Case: Cooling-off period processing
- Use Case: Fees-back service evaluation and processing
- Use Case: Insurance prolongation
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
- Use Case: Select insurance services
- Use Case: Use Case
