---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface"
domain: "Modules"
element_id: 1816879
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Min installment base

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface

## 📝 Notes

LDM: SERVICE.MTCACC.MinInstallmentBase.Name

Listed: BaseType.Name filtered according to the rule Search for Allowed Base Types by Usage for usage = "REMI" 

If AccountType not in (CURRENT_ACCOUNT)
then

	
- visible = true
	
- mandatory

else

	
- visible = false
	
- set MinInstallmentBase = OP

Localization code: PRD_MinInstalmentBase

## 📊 Appears In (1 diagrams)

- Custom: Set MTCACC Service properties
