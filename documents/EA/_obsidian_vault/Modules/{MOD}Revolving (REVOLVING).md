---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms"
domain: "Modules"
element_id: 1877735
diagrams: 2
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Revolving (REVOLVING)

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms

## 📝 Notes

This algorithm can be used for loans with ProductType = REL.

{DEL PCG-1208_2}
Invariants:

	
- NumberOfAdvancePayments = 0

{/DEL}

Outputs:

	
- DownPayment


	
- Cash Payment


	
- All related fees


Algorithm:

	
- Down payment (see Down payment definition).
If the value cannot be calculated because of a needed percentage-based-on amount or limit-based-on amount is not yet calculatedable for the given tariff item, the variant is returned as invalid.
If the calculated value is lower than zero and maximal PreferredCashPayment was specified on the input, the variant is returned as invalid.
	
- Cash payment (see Cash payment definition).
If the value cannot be calculated because of a needed percentage-based-on amount or limit-based-on amount is not yet calculable for the given tariff item, the variant is returned as invalid. 
If the condition 
PreferredMinimalCashPayment <= CalculatedCashPayment <= PreferredMaximalCashPayment
is not satisfied, the variant is returned a invalid and this algorithm ends.

## 🔗 Connections (4)

- → Dependency: [[Down payment]]
- → Generalization: [[{MOD}Offer Calculation Algorithm]]
- → Dependency: [[Cash payment definition]]
- → Realisation: [[REQ#1 Change of PIR calculation in STANDARD algorithm]]

## 📊 Appears In (2 diagrams)

- Custom: Offer Calculation algorithm - REVOLVING
- Custom: Offer Calculation algorithms
