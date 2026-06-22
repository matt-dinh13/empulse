---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms"
domain: "Modules"
element_id: 1877729
diagrams: 2
connections: 9
tags:
  - requirement
  - modules
---

# 📋 {DEL}Calculated flat rate (CFR)

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms

## 📝 Notes

{DEL PCG-1208_2/}
This algorithm can be used only for products where ProductType = CEL and InitialTransactionType = POS.

Invariants:

	
- Downpayment = 0


Outputs:

	
- Annuity
	
- NumberOfAdvancePayments
	
- CashPaymentTotal
	
- MonthlyPayment
	
- All related fees


Steps:

	
- System runs the algorithm itself (the algorithm is described in the linked document).
	
- System returns all the outputs to the calling use case.

## 🔗 Connections (8)

- → Dependency: [[Cash Payment on Product]]
- → Dependency: [[Annuity factor 30_360 definition]]
- → Dependency: [[Annuity calculation]]
- → Generalization: [[{MOD}Offer Calculation Algorithm]]
- → Dependency: [[{MOD}Annuity base amount definition]]
- → Dependency: [[Total Monthly Payment definition]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[Cash payment definition]]

## 📊 Appears In (2 diagrams)

- Custom: Offer Calculation algorithms
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
