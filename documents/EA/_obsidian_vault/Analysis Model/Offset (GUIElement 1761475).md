---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/ID"
domain: "Analysis Model"
element_id: 1761475
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Offset

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/ID

## 📝 Notes

Defines how many days before installment due date is needed to send direct debit instructions to DD Provider

Localization code:
ACC_BankDDOffset

Class:
Bank.DirectDebitProvider.DueDateOffset

Default value:
In case of Create bank use case is set default value according to system parameter PARAM_BMNG_DEF_OFFSET. If parameter isn't set in system, then there isn't used any default value.

## 🔗 Connections (4)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Allowed offset range]]
- → Dependency: [[Enabled for 'DD' provider type]]
- → Dependency: [[Numeric]]

## 📊 Appears In (1 diagrams)

- Custom: Bank DD settings - ID specific
