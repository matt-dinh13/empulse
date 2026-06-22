---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations"
domain: "Modules"
element_id: 1879050
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Offer duplicity

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations

## 📝 Notes

Two offers are duplicate if they have the following financial and non-financial attributes identical:

	
- based on same product variant,


	
- all fees (tariff item types and amounts)
	
- cash payment,
	
- based on same campaign offer
	
- services including insurances (types and amounts)
	
- related marketing action.

For productType = CEL:

	
- credit amount
	
- advanced payment number,
	
- annuity amount,
	
- effective interest rate,
	
- interest rate,
	
- terms,
	
- total payment per credit,
	
- total monthly payment,

For productType = REL:

	
- presented minimal monthly installment,
	
- net credit limit
	
- provided credit limit
	
- financing package code
	
- financing scheme code

For productType = SAI and productFlag.SAI_WITH_INSTALLMENT_SCHEDULE = false:

	
- total monthly payment

For productType = SAI  and productFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true:

	
- total monthly payment
	
- credit amount
	
- terms

## 🔗 Connections (2)

- ← Dependency: [[01.155 Generate optional offers (UseCase 1827694)]]
- ← Dependency: [[Evaluation of product sub-variant]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Evaluation of product sub-variant
- Use Case: Generate optional offers
