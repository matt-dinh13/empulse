---
type: GUIElement
stereotype: "lradio"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/IN"
domain: "Analysis Model"
element_id: 1869638
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Same as last DDM

> **Type**: GUIElement · **Stereotype**: «lradio»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model/IN

## 📝 Notes

Default for create:
If another DDM already exists on the contract, this checkbox is checked, otherwise checkbox is unchecked.

Default for update:
Unchecked.

Editable:
Field is editable for create and update of DDM.

Visibility:
This field is visible only if an another DDM already exists on the contract.

When this field is checked by user, fields Credit amount and Monthly Installment are unchecked and field Limil is filled in with value of the limit of last DDM on the contract.

Localization: 
DD_SameAsLastDDM

## 📊 Appears In (1 diagrams)

- Custom: IN - specific - DDM Header
