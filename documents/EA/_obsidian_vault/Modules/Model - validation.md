---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Model/Validation Rules"
domain: "Modules"
element_id: 1844975
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Model - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Model/Validation Rules

## 📝 Notes

Models - ModelDto 

	
- code
mandatory
must fulfill Product catalog enitity code
must be unique in Model.Code
	
- name
mandatory
must fulfill Product catalog entity name
	
- manufacturer
mandatory
must exists in Manufacturer.Code


	
- commodityType
mandatory
must exists in list of commodity types returned by Get list of commodity types

## 🔗 Connections (3)

- → Dependency: [[Product catalog enitity code]]
- → Dependency: [[Get list of commodity types]]
- → Dependency: [[Product catalog entity name]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
