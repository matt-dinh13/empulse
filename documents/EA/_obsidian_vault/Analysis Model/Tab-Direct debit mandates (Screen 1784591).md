---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Direct debit mandates"
domain: "Analysis Model"
element_id: 1784591
diagrams: 1
connections: 1
tags:
  - screen
  - analysis-model
---

# 📱 Tab-Direct debit mandates

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Direct debit mandates

## 📝 Notes

Tab containing the detailed information about the direct debit mandate, which is connected with respective contract and used as its repayment channel.

Visible only if direct debit is allowed repayment method for the contract (i.e. 'DD' is returned by the Get allowed repayment methods for contract rule).

Localization code:
DDM_DirectDebitMandate

## 🔗 Connections (1)

- → Dependency: [[Get allowed repayment methods for contract]]

## 📊 Appears In (1 diagrams)

- Custom: Tab-Direct debit mandates
