---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857160
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Min installment base

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Type of the base to be used for the calculation of the minimal installment amount applicable for application's selected product offer.

LDM source:

	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Service->Service[.Type='MTCACC'].Min_Installment_Base //If exists.

OR

	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Revolving_Loan_Product_Variant.Min_Installment_Base


Localization code:
PRD_MinInstalmentBase

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
