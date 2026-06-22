---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820263
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card issuer name

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

## 📝 Notes

Name of the external payment card's issuer.

Not editable - read only.

LDM source:

	
- //LDM source for field pre-filling when the application form is being constructed
Temporary_Application->TempAppl_Payment_Channel[.Purpose='DI' and .Type = 'CA'].Card_Issuer_Name
or
GetCardInfoResponse.cardData.cardIssuerName
	
- //LDM source used upon the external payment card data are verified - see the use cases associated with the  Verify card data button for more details
VerifyCardDataResponse.cardData.cardIssuerName


Localization code:
GEN_CARDISSUER

## 📊 Appears In (1 diagrams)

- Custom: Card account selection on Application detail
