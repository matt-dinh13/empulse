---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF"
domain: "Analysis Model"
element_id: 1538233
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Countdown

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF

## 📝 Notes

When time validity of verification expires:

	
- if result is not set yet, system sets TempAppl_Contact_Verification(last).Result = VERIFICATION_TIMEOUT 
	
- enables the button Generate verification code} 


If expired validity belongs to the last available generated code (count of TempAppl_Contact.TempAppl_Contact_Verification of verified contact = global parameter MaxSendingOfVerificationCode), then the button Skip verification is enabled.

## 📊 Appears In (1 diagrams)

- Custom: Contact to client verification - product AF
