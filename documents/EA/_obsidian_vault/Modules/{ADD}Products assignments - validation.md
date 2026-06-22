---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Validation Rules"
domain: "Modules"
element_id: 1872791
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Products assignments - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Validation Rules

## 📝 Notes

{ADD PCG-5594}
For country: PH

Input parameters:

	
- productCode: mandatory, 
URL parameter, 
string, 
multiple values allowed,
Exists and is ACTIVE in Products
	
- partnerCode: optional, 
Query parameter, 
string,
multiple values allowed
	
- partnerName: optional, 
Query parameter, 
string,
multiple values allowed

## 🔗 Connections (1)

- ← Dependency: [[{ADD}GET product-assignments]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
