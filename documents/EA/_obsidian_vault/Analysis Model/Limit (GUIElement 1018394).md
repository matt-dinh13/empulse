---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Delinquency direct debit/User Interface Model"
domain: "Analysis Model"
element_id: 1018394
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Limit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Delinquency direct debit/User Interface Model

## 📝 Notes

LDM:
Contract->Contract_Bank_Account.Limit

Localization code:
GEN_Limit

Other:
This field is prefilled by Offer_Financial_Parameter.Annuity (before contract is signed) or Financial_Parameter.Annuity (after contract is signed), when:
- user enters account number in field Account number of bank account and
- this field is empty

## 🔗 Connections (2)

- → Dependency: [[Limit]]
- → Dependency: [[Whole bank account must be filled (Action 1018391)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update delinquency direct debit
