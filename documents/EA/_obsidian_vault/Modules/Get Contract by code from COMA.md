---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules"
domain: "Modules"
element_id: 1870136
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Contract by code from COMA

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules

## 📝 Notes

This rule performs validation for existing Contract. 
Input:

	
- contractCode


Steps:

	
- System calls GET https://coma.<environment>/rest/v12/contracts/{contractCode}; projection = CUSTOMER_DEFAULT
	
- System returns the response to calling use case

## 🔗 Connections (1)

- ← Dependency: [[Validate Contract Supplement request]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Create Contract Service Supplement - Use Case Model
