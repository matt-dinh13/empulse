---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model"
domain: "Analysis Model"
element_id: 1701750
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Variant

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model

## 📝 Notes

CET Variant 
Combo contains list of Contract Early Termination Variant.
If Contract.Product.ProductProfile.InitialTransactionType = POS then only variant (POS_CASH, POS_GOODS) is displayed.
If Contract.Product.ProductProfile.InitialTransactionType = CASH then only variant (CASH_CASH) is displayed.
If only one variant is to be dispalyed, it is selected and the field is disabled.

Localization code: SER_CETRequiredVariant

## 🔗 Connections (2)

- → Dependency: [[CET Variant]]
- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: CET Early repayment
