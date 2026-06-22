---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms"
domain: "Modules"
element_id: 1877737
diagrams: 2
connections: 7
tags:
  - requirement
  - modules
---

# 📋 {DEL}Calculated flat rate and cash payment (CFR_CP)

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

## 🔗 Connections (6)

- → Dependency: [[Total Monthly Payment definition]]
- → Dependency: [[{MOD}Subvention amount definition]]
- → Dependency: [[Annuity calculation]]
- → Dependency: [[Annuity factor 30_360 definition]]
- → Generalization: [[{MOD}Offer Calculation Algorithm]]
- → Dependency: [[Cash Payment on Product]]

## 📊 Appears In (2 diagrams)

- Custom: Offer Calculation algorithms
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
