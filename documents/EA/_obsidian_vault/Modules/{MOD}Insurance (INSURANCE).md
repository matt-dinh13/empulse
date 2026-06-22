---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms"
domain: "Modules"
element_id: 1877734
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {MOD}Insurance (INSURANCE)

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/Calculation type algorithms

## 📝 Notes

This algorithm can be used only for products where ProductType = SAI {ADD PCG-2824} and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = false.
For ProductType = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true see Standard (STND) .{/ADD}

Outputs:

	
- MonthlyPayment
	
- All related service fees


Algorithm:
 

	
- System checks if at least one insurance service is assigned to the variant. Otherwise the variant is returned as invalid.
	
- System checks that no other tariff items than MonthlyFees (see Monthly fees amount definition) or ServiceFees (see Service fees amount definition)  are assigned to the variant. Otherwise the variant is returned as invalid.
	
- System calculates total monthly payment according to Total Monthly Payment definition. If the value cannot be calculated because a needed percentage-based-on amount or limit-based-on amount is not yet calculatedable for the given tariff item, the variant is returned as invalid. If the value is not greater than zero, the variant is returned as invalid as well.

## 🔗 Connections (3)

- → Dependency: [[Total Monthly Payment definition]]
- → Realisation: [[REQ#1 Change of PIR calculation in STANDARD algorithm]]
- → Generalization: [[{MOD}Offer Calculation Algorithm]]

## 📊 Appears In (2 diagrams)

- Custom: Offer Calculation algorithm - INSURANCE
- Custom: Offer Calculation algorithms
