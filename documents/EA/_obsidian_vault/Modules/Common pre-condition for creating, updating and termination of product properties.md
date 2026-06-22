---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules"
domain: "Modules"
element_id: 1275105
diagrams: 1
connections: 12
tags:
  - requirement
  - modules
---

# 📋 Common pre-condition for creating, updating and termination of product properties 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules

## 📝 Notes

- Product version must be selected in status Inactive.
	
- Mode (CREATE, UPDATE, REMOVE) must be defined for setting of property.
	
- Product property must be selected for updating/cancellation of an existing property.

## 🔗 Connections (12)

- ← Dependency: [[{DEL}02.602 Set product variant]]
- ← Dependency: [[{DEL}02.607 Remove product variant]]
- ← Dependency: [[{DEL}02.604 Assign document container to product]]
- ← Dependency: [[{DEL}02.644 Remove document container from product]]
- ← Dependency: [[{DEL}02.645 Remove printout template from product]]
- ← Dependency: [[{DEL}02.605 Assign printout template to product]]
- ← Dependency: [[{DEL}02.610 Assign manufacturers to product]]
- ← Dependency: [[{DEL}02.608 Assign marketing action to product]]
- ← Dependency: [[{DEL}02.603 Set subvention for product]]
- ← Dependency: [[{DEL}02.643 Remove subvention for product]]
- ← Dependency: [[{DEL}02.606 Assign commodities to product]]
- ← Dependency: [[{DEL}02.601 Set main product properties]]

## 📊 Appears In (1 diagrams)

- Custom: Product setting common rules
