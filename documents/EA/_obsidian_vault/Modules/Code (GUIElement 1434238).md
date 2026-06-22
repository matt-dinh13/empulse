---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Manufacturer Management and Assignment/User Interface"
domain: "Modules"
element_id: 1434238
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Code

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Manufacturer Management and Assignment/User Interface

## 📝 Notes

{ADD PCG-1503}

	
- When creating of new manufacturer allow only characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed)

{/ADD}

	
- Max length 20 characters


LDM: Manufacturer.Code

Localization code: GEN_Code

## 🔗 Connections (2)

- → Dependency: [[Unique code]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Manage Manufacturers
