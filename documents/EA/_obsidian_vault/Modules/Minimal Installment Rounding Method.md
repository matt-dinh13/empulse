---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface"
domain: "Modules"
element_id: 1816893
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Minimal Installment Rounding Method

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface

## 📝 Notes

LDM: SERVICE.MTCACC.MinInstallmentRounding.Name

If AccountType not in (CURRENT_ACCOUNT)
then

	
- visible = true
	
- mandatory

else

	
- visible = false


	
- set MinInstallmentRounding = UP

Localization code: PRD_MinInstalmentRounding

## 📊 Appears In (1 diagrams)

- Custom: Set MTCACC Service properties
