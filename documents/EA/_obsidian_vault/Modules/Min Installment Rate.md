---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface"
domain: "Modules"
element_id: 1816907
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Min installment rate

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface

## 📝 Notes

LDM: SERVICE.MTCACC.MinInstallmentRate

If AccountType not in (CURRENT_ACCOUNT)
then

	
- visible = true
	
- mandatory

else

	
- visible = false
	
- set MinInstallmentRate = 0

Localization code: PRD_MinInstallmentRate

## 📊 Appears In (1 diagrams)

- Custom: Set MTCACC Service properties
