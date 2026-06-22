---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface"
domain: "Modules"
element_id: 1816905
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Credit amount max.

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface

## 📝 Notes

LDM: SERVICE.MTCACC.CreditAmountMax

If AccountType not in (CURRENT_ACCOUNT)
then

	
- visible = true
	
- mandatory

else

	
- visible = false


Validation:
>= 0
>= Credit amount min.
Localization code: PRD_CreditAmountMax

## 🔗 Connections (1)

- → Dependency: [[Integer _= 0]]

## 📊 Appears In (1 diagrams)

- Custom: Set MTCACC Service properties
