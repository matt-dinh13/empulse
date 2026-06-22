---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803458
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Min Instalment Base

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

Listed: BaseType.Name filtered according to the rule Search for Allowed Base Types by Usage for usage = "REMI" 
If ProductProfile.IsDebit = false then

	
- visible = true
	
- mandatory

else

	
- visible = false
	
- set MinInstallmentBase = OP

Localization code: PRD_MinInstalmentBase

## 🔗 Connections (2)

- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
