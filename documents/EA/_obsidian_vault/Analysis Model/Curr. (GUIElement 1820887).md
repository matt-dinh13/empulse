---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820887
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Curr.

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Currency of the direct debit mandate's regular payments.

Not editable - read only.

Other:

	
- Visible only if the contract is based on a REL product type (i.e. Contract.Contract_Type = 'REL').


LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Regular_Payment_Currency
or
GetDDMResponse.ddmData.regularPaymentData.regularPaymentAmount.currency


	
- //LDM for value saving
Contract->DDM.Regular_Payment_Currency
or
CreateDDMDraftRequest.regularPaymentData.regularPaymentAmount.currency / 
UpdateDDMOrDraftRequest.regularPaymentData.regularPaymentAmount.currency


Localization code: none

## 🔗 Connections (2)

- ← Generalization: [[Curr. (GUIElement 1820872)]]
- ← Generalization: [[Curr.]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
