---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1821052
diagrams: 1
connections: 2
tags:
  - screen
  - analysis-model
---

# 📱 Tab - Direct debit mandates

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

Tab containing the detailed information about the direct debit mandate, which is connected with respective application and used as its repayment channel.

Visible only if direct debit is allowed repayment method for the application (i.e. 'DD' is returned by the Get allowed repayment methods for application rule).

Localization code:
CON_DirectDebitMandates

## 🔗 Connections (2)

- → Usage: [[Document page information]]
- → Dependency: [[Get allowed repayment methods for application]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
