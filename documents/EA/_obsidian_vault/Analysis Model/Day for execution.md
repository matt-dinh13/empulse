---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/User Interface/Transfer installment plan back"
domain: "Analysis Model"
element_id: 907407
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Day for execution

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/User Interface/Transfer installment plan back

## 📝 Notes

List of day types to which should be transfer back executed from TransferBackDayType enum

If 'DUE_DAY' is selected

	
- Execution date field is disabled


	
- the field value is filled in by the nearest installment due date of the chosen IP


If 'ANY' is selected

	
- Execution date field is enabled and mandatory
	
- transfer back will be executed at the specified date


Localization code: ACC_TransferBackExecutionDayType

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: Transfer installment plan back
