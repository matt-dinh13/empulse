---
type: GUIElement
stereotype: "lradio"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820891
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Monthly Installment

> **Type**: GUIElement · **Stereotype**: «lradio»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Selection for using the amount of a monthly installment for automatic setting of the Limit field's value.

Other:

	
- Enabled only if the Limit field is editable, otherwise disabled.
	
- Unticked by default.
	
- Once selected by the user, radio buttons Credit amount and Same as last DDM are automatically unticked and system sets the value of the monthly installment amount (i.e. Contract->Offer_Financial_Parameters.Total_Monthly_Payment) into the Limit field.


Localization code:
PRD_InstallmentAmount

## 🔗 Connections (1)

- ← Generalization: [[Monthly Installment]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
