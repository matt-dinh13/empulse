---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857141
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Min installment rate

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Percentage rate to be used for the calculation of the minimal installment amount applicable for application's selected product offer.

LDM source:

	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Service->Service[.Type='MTCACC'].Min_Installment_Rate //If exists.

OR

	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Revolving_Loan_Product_Variant.Min_Installment_Rate


Localization code:
PRD_MinInstalmentRate

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
