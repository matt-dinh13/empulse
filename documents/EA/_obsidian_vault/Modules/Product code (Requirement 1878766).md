---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1878766
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Product code

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

- Number of characters must be in interval <4, 10>
	
- New product code must differ from already existing product codes.  (MSG_NON_UNIQUE_PRODUCT)


	
- When creating of new product allow only characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed)

## 🔗 Connections (2)

- ← Dependency: [[Product - validation]]
- ← Dependency: [[Product code (GUIElement 1872091)]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules
