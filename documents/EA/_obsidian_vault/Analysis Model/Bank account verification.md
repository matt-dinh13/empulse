---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/General bank account (panel)"
domain: "Analysis Model"
element_id: 1736882
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank account verification

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/General bank account (panel)

## 📝 Notes

Form for a verification of client's bank account.

Visible only if all the following conditions are met:

	
- The superior panel is displayed within the application form and the user has the UC01_065 privilege assigned.
or
The superior panel is displayed within Change disbursement channel modal window and the user has the UC01_065_ApplicationDetail privilege assigned.


	
- Product is selected and requires the external verification of client's bank account used for the money disbursement (i.e. Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product->Product_Flag[.Type->Product_Flag_Type.Code='DISB_BA_VERIF']).


Localization code: none

## 📊 Appears In (1 diagrams)

- Custom: General bank account
