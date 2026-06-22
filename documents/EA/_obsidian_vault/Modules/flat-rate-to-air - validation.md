---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1845098
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 flat-rate-to-air - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

{ADD PCG-2352/}
 

	
- transactionAmount
mandatory
higher than 0
[INVALID_NUMBER]
	
- term
mandatory
higher than 0
[INVALID_NUMBER]
	
- monthlyFlatRate
mandatory
equal or higher than 0
[INVALID_NUMBER]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
