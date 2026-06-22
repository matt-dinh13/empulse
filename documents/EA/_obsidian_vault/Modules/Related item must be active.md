---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules"
domain: "Modules"
element_id: 1789761
diagrams: 1
connections: 9
tags:
  - requirement
  - modules
---

# 📋 Related item must be active

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules

## 📝 Notes

If related entity contain attribute Active (boolean) then:

	
- When creating or updating a relation only active items can be linked (Active = true).
	
- For existing relation also the link to inactive item is acceptable if activity of linked item was changed to false after setting of relation.

## 🔗 Connections (9)

- ← Dependency: [[Printout template]]
- ← Dependency: [[Document type (GUIElement 872550)]]
- ← Dependency: [[Only active item can be related]]
- ← Dependency: [[Business Category]]
- ← Dependency: [[Accounting Method]]
- ← Dependency: [[Eligibility Container]]
- ← Dependency: [[Tariff (GUIElement 1867447)]]
- ← Dependency: [[Currency (GUIElement 1867440)]]
- ← Dependency: [[Terms and conditions]]

## 📊 Appears In (1 diagrams)

- Custom: Product setting common rules
