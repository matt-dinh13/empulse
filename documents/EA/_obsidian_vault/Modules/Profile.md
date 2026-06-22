---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface"
domain: "Modules"
element_id: 1872050
diagrams: 1
connections: 3
tags:
  - guielement
  - modules
---

# 🖥️ Profile

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface

## 📝 Notes

Listed: ProductProfile.(code + name) where ProductProfile.ProductType = selected Product Type and ProductProfile.ProductTransactionType = selected Product transaction type and ProductProfile.Active = True

LDM: PRODUCT. Profile
When creating a new product by copy:

	
- Pre-filled by product profile of the pattern product
	
- Disabled 


Localization code: PRD_Profile

## 🔗 Connections (3)

- → Dependency: [[Only active item can be related]]
- → Dependency: [[Product Profile (Class 1879121)]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Create product
