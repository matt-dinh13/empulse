---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator/Validation Rules"
domain: "Modules"
element_id: 1676529
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Offer calculation - validation

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator/Validation Rules

## 📝 Notes

OfferCalculationRequestDto 

	
- productSet
mandatory
	
- currency
mandatory


OfferRecalculationRequestDto 

	
- originalOffer
mandatory
	
- 
	
- currency
mandatory


AlternativesRequestDto

## 🔗 Connections (3)

- ← Dependency: [[POST calculation]]
- ← Dependency: [[POST alternatives]]
- ← Dependency: [[POST recalculation]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
