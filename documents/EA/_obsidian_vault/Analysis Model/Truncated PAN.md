---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820277
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Truncated PAN

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

## 📝 Notes

Truncated PAN number of the external payment card.

Not editable - read only.

Other:

	
- Displayed value is divided by a space character (' ') into multiple blocks of four characters.

Example:
   - Truncated PAN number 123456******3456 is displayed as '1234 56** **** 3456'.


LDM source:

	
- //LDM source for field pre-filling when the application form is being constructed
Temporary_Application->TempAppl_Payment_Channel[.Purpose='DI' and .Type = 'CA'].Truncated_PAN
or
GetCardInfoResponse.cardData.truncatedPan


	
- //LDM source used upon the external payment card data are verified - see the use cases associated with the Verify card data button for more details
VerifyCardDataResponse.cardData.truncatedPan


Localization code:
GEN_TruncatedPAN

## 📊 Appears In (1 diagrams)

- Custom: Card account selection on Application detail
