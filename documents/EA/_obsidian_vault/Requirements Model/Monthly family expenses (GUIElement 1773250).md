---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9118 - MFI_New fields addition"
domain: "Requirements Model"
element_id: 1773250
diagrams: 2
connections: 3
tags:
  - guielement
  - requirements-model
---

# 🖥️ Monthly family expenses

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9118 - MFI_New fields addition

## 📝 Notes

Renamed from 'Household expenses'

Visible only if all the following conditions are met:

	
- Household income field is not empty AND it's value is not greater than '25.000,00'.
	
- Parameter (parameters.properties) displayExpensesOnAF = TRUE.

## 🔗 Connections (3)

- → Generalization: [[Household expenses (GUIElement 1721898)]]
- → Dependency: [[Monthly family expenses]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9118 - MFI_New fields addition
- Custom: Monthly income/expenses IN
