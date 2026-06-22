---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Marketing Action/Validation Rules"
domain: "Modules"
element_id: 1581621
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 MarketingActionDto - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Marketing Action/Validation Rules

## 📝 Notes

POST MarketingActionDto 

	
- code
Mandatory [REQUIRED]
Unique in Marketing Action .code [MARKETING_ACTION_EXISTS]
Length of code has to be between 4 and 20 characters and code can contain only upper case letters, numbers, dash and underscore [INVALID_CODE]
	
- name
Mandatory [TRANSLATION_MISSING]
	
- active
If not filled, then default is True


PUT MarketingActionDto 

	
- code
not allowed [INVALID_VALUE]

## 🔗 Connections (2)

- ← Dependency: [[POST marketing action]]
- ← Dependency: [[PUT manufacturers]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
