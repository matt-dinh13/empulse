---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model/Debt calculator"
domain: "Modules"
element_id: 1623525
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Revolving area

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model/Debt calculator

## 📝 Notes

This panel is only modeling container and cannot be visible distinguishable in application. This element groups existing panels: 

	
- Debt
	
- Credit calculation


These elements are visible only for business types Credit card loans and Debit card loans (system evaluate business rule Business type of loan to check if panel should be visible).

Source: Values of all the fields are calculated in UC 01.479 Show supposed debt for REL contract with rule Calculation of future debt for REL contract (abbrelevation FD)

## 📊 Appears In (1 diagrams)

- Custom: Debt calculator
