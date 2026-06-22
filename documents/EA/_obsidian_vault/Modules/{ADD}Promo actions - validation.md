---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Promo Actions/Validation Rules"
domain: "Modules"
element_id: 1821527
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {ADD}Promo actions - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Promo Actions/Validation Rules

## 📝 Notes

{ADD PCG-4737/}
Promo actions - PromoActionDto  

	
- code
mandatory
must fulfill Product catalog enitity code
must be unique in Promo Action .Code
	
- name
mandatory
must fulfill Product catalog entity name
	
- validFrom
mandatory
must be >= actual date
	
- validTo
must be >= validFrom

## 🔗 Connections (4)

- → Dependency: [[Product catalog entity name]]
- → Dependency: [[Product catalog enitity code]]
- ← Dependency: [[POST promo-actions]]
- ← Dependency: [[PUT promo-actions]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Logical: Promo Actions API
