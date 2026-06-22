---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Manufacturer/Validation Rules"
domain: "Modules"
element_id: 1581589
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 ManufacturerDto - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Manufacturer/Validation Rules

## 📝 Notes

POST ManufacturerDto 

	
- code
Mandatory [REQUIRED]
Unique in Manufacturer.code [MANUFACTURER_EXISTS]
Length of code has to be between 4 and 20 characters and code can contain only upper case letters, numbers, dash and underscore [INVALID_CODE]
	
- name
Mandatory [TRANSLATION_MISSING]
	
- active
If not filled, then default is True


PUT ManufacturerDto 

	
- code
not allowed [INVALID_VALUE]

## 🔗 Connections (2)

- ← Dependency: [[POST manufacturers]]
- ← Dependency: [[PUT manufacturers (UseCase 1841484)]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
