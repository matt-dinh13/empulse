---
type: GUIElement
stereotype: "lradio"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820886
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Credit amount

> **Type**: GUIElement · **Stereotype**: «lradio»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Selection for using the credit amount for automatic setting of the Limit field's value.

Other:

	
- Enabled only if the Limit field is editable, otherwise disabled.
	
- Selected by default for Create DDM scenario (i.e. 01.421 Create application DDM) if the global parameter BL_DDMLIMITBASE = 'CREDIT_AMOUNT' and no other direct debit mandate exists on the same application. Otherwise unticked.
	
- Unticked by default for Update DDM scenario (i.e. 01.422 Update application DDM).
	
- Once selected by the user, radio buttons Monthly Installment and Same as last DDM are automatically unticked and system sets the value of the credit amount (i.e. Contract->Offer_Financial_Parameters.Net_Credit_Amount) into the Limit field.


Localization code:
PRD_CreditAmount

## 🔗 Connections (1)

- ← Generalization: [[Credit amount (GUIElement 1820860)]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
