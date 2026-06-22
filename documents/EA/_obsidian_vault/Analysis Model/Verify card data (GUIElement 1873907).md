---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873907
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verify card data

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model

## 📝 Notes

Button for verifying an external payment card.

Activates the 01.675 Verify card data in external module for contract use case.

Other:
In case the card data verification is successful (i.e. temporary object VerifiedExternalCardData is returned upon calling the respective use case), system performs the following operations on the actual form:

	
- System clears the PAN number and Cardholder name fields.
	
- System displays the returned VerifiedExternalCardData.TruncatedPAN within the Truncated PAN element.
	
- System displays the returned VerifiedExternalCardData.CardIssuerName within the Card issuer name element.


Localization code:
PCH_VerifyCardData

## 🔗 Connections (1)

- → Dependency: [[01.675 Verify card data in external module for contract]]

## 📊 Appears In (1 diagrams)

- Custom: External Card account selection - change disb. channel
