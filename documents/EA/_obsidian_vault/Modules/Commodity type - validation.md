---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Type/Validation Rules"
domain: "Modules"
element_id: 1844574
diagrams: 2
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Commodity type - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Type/Validation Rules

## 📝 Notes

GET commodityType

	
- code
commodity type with code exists [Val_Commodity_Type_Not_Found]


POST commodityType

	
- code
mandatory
must be unique [Val_Commodity_Type_Exists]
must fulfill Commodity enitity code
	
- name
must fulfill Commodity entity name
	
- categoryCode
must exists in active Commodity Category.code


	
- taxRate
must be in interval <0,1> [Val_Invalid_Tax_Rate]
	
- flags
must exists in Commodity Type Flag


PUT commodityType

	
- code
commodity type with code exists [Val_Commodity_Type_Not_Found]
must fulfill Commodity enitity code
	
- name
must fulfill Commodity entity name


	
- categoryCode
must exists in active Commodity Category.code


	
- taxRate
must be in interval <0,1> [Val_Invalid_Tax_Rate]


	
- flags
must exists in Commodity Type Flag

## 🔗 Connections (5)

- ← Dependency: [[POST Commodity Type]]
- ← Dependency: [[PUT Commodity Type]]
- ← Dependency: [[{MOD}GET Commodity Type]]
- → Dependency: [[Commodity enitity code]]
- → Dependency: [[Commodity entity name]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
