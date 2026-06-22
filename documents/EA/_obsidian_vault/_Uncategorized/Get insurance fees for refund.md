---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1879622
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get insurance fees for refund

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

{ADD IS-1926}
This rule describes how to get insurance tariff items to be refunded because of COP service evaluation. 
Input:

	
- ContractServiceId

Output:

	
- InsuranceFeeAmountForRefund


Steps:

	
- For the chosen ContractService[where externalId = ContractServiceId] related to the processed Contract
- get InsuranceFeeAmountForRefund from calculated Financial Parameters Items.Item Amount used for the processed Contract Service (i.e. Contract Service -> FP Service Tariff Item ->Tariff Item -> Tariff Item Type with Tariff Item Usage = S(Service) and Tariff Item Type.Charging Periodicity = ONE_TIME and without Tariff Item Type.Flag Type = TO_PRINCIPAL)
	
- Returns InsuranceFeeAmountForRefund
