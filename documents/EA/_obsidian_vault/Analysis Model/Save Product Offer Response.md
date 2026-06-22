---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1878018
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Save Product Offer Response

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

Input:
- Request
- Offer
- OriginalCalculationRequest (optional)


	
- Generate unique code of the response (string just 20 chars, no other specific rules for code structure).
	
- Create record in Product Offer Response with
- Code = unique code
- reference to Product Offer Request = Request
- reference to Offer Financial Parameter = Offer
- if Request.Type = RECALCULATION then add reference to original Product Offer Calculation Request

## 🔗 Connections (2)

- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Calculate/Recalculate
