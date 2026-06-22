---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Category/Validation Rules"
domain: "Modules"
element_id: 1844571
diagrams: 2
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Commodity Category - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Category/Validation Rules

## 📝 Notes

GET commodityCategory

	
- code
commodity category with code exists [Val_Commodity_Category_Not_Found]


POST commodityCategory

	
- code
mandatory
must be unique [Val_Commodity_Category_Exists]
must fulfill Commodity enitity code


	
- name
must fulfill Commodity entity name
	
- riskCategoryCode
must exists in Commodity Risk Category Type.code


PUT commodityCategory

	
- code
commodity category with code exists [Val_Commodity_Category_Not_Found]
must fulfill Commodity enitity code


	
- name
must fulfill Commodity entity name
	
- riskCategoryCode
must exists in Commodity Risk Category Type.code

## 🔗 Connections (5)

- ← Dependency: [[PUT Commodity Catrgories]]
- ← Dependency: [[GET Commodity Categories]]
- ← Dependency: [[POST Commodity Categories]]
- → Dependency: [[Commodity enitity code]]
- → Dependency: [[Commodity entity name]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
