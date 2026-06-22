---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1879623
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get amount of condition for charging

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

{ADD IS-2002}
This rule describes how to get tariff items with flag CONDITION_FOR_CHARGING and sum of amount to be deducted from tariff item with flag CHARGE_CONDITIONALLY during early repayment calculation. 
Input:

	
- ContractId
	
- ER due date

Output:

	
- ConditionForChargingAmount


Steps:

	
- For the chosen Contract - get ConditionTariffItemType from Financial Parameters Items.Tariff Item Type Code for Tariff Item Type with Tariff Item Usage = A(Standatd) and  Tariff Item Type.Flag Type = CONDITION_FOR_CHARGING). If no tariff item is found, system set ConditionForChargingAmount = 0
	
- System sums Installment.Installment Part.Amount for ConditionTariffItemType where Installment.Due Date <= ER due date
	
- Returns ConditionForChargingAmount
