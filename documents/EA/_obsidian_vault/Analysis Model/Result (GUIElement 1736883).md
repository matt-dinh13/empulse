---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/General bank account (panel)"
domain: "Analysis Model"
element_id: 1736883
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Result

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/General bank account (panel)

## 📝 Notes

Result of the client's bank account verification.

LDM source:

	
- //LDM source for field pre-filling when the application form is being constructed
GetPaymentChannelResponse.paymentChannels[.purpose='DI'].externalVerificationResult
	
- //LDM source used upon the bank account is verified - see the 01.065 Verify bank account for application use cases for more details
Verification result enumeration value selected based on the received PaymentChannelVerificationResponse.result / VerifyBankAccountDataExternallyResponse.result
	
- //LDM for value saving
CreatePaymentChannelDraftRequest[.purpose='DI'].externalVerificationResult / 
UpdatePaymentChannelOrDraftRequest[.purpose='DI'].externalVerificationResult 

Note: Label for the 'VERIFIED' result is complemented with tick icon.

Localization code:
GEN_VerificationResult

## 🔗 Connections (1)

- → Dependency: [[Obligation of Bank Validation document (Action 1775351)]]

## 📊 Appears In (1 diagrams)

- Custom: General bank account
