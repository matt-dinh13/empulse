---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857148
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Min installment fixed amount

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Minimal installment fixed amount applicable for application's selected product offer.

LDM source:

	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Service->Service[.Type='MTCACC'].Min_Installment_Fixed_Amount //If exists.

OR

	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Revolving_Loan_Product_Variant.Min_Installment_Fixed_Amount


Localization code:
PRD_MinInstalmentAmount

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
