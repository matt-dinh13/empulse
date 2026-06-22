---
type: GUIElement
stereotype: "lradio"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/IN"
domain: "Analysis Model"
element_id: 1869640
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Credit amount

> **Type**: GUIElement · **Stereotype**: «lradio»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/IN

## 📝 Notes

Default for create:
If value of the global parameter BL_DDMLIMITBASE=CREDIT_AMOUNT, then this checkbox is checked, otherwise checkbox is unchecked.

Default for update:
Unchecked.

Editable:
Field is editable for create and update of DDM.

Visibility:
Field is visible for create and update of DDM.

When this field is checked by user, fields Same as last DDM and Monthly Installment are unchecked and field Limit is filled in with value of credit amount(Financial_Parameters.Net Credit amount).

Localization: 
PRD_CreditAmount

## 📊 Appears In (1 diagrams)

- Custom: IN - specific - DDM Header
