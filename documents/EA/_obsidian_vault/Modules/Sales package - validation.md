---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Validation rules"
domain: "Modules"
element_id: 1583209
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Sales package - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Validation rules

## 📝 Notes

POST, PUT SalesPackageInputDto  

	
- code 
must be unique in Sales Package.Code [PRODUCT_PROFILE_EXISTS]
Mandatory 
When creating of new sales package allow only characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed)
Number of characters must be in interval <4, 20>
[INVALID_CODE]


	
- description
optional
	
- items
must fulfils validation SalesPackageItem - validation
	
- name
maximal length 255 chars [MAX_LENGTH]

## 🔗 Connections (2)

- ← Dependency: [[POST sales package]]
- ← Dependency: [[PUT sales package]]

## 📊 Appears In (2 diagrams)

- Custom: Validation rules
- Use Case: Use Case
