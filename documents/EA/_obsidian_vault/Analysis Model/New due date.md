---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface"
domain: "Analysis Model"
element_id: 1747001
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ New due date

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface

## 📝 Notes

List of possible days of month for due date change. It can contain only numbers in range from 1 to 28.

e.g. The list contains values 1, 10, 25 -> due date can be change only to 1st, 10th or 25th day of month. 

After change the value the system prepares a set of change due date simulations according to the rule Preapre change due date simulation and refresh the grid with due date simulations.

LDM source:
enumeration Available Days For Due Date Change

Localization code:
SER_NewDueDateCHDD

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Prepare change due date simulation]]

## 📊 Appears In (1 diagrams)

- Custom: Create request for Change due date
