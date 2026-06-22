---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818375
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verify code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Button for verifying the OTP code provided by the recipient.

Activates the 01.148 Validate verification code for client's documentation use case.

Other:
Button's label consists of the localization code and a number of remaining available attempts (e.g. 'Verify code (2 attempts)').
Value for the remaining available attempts is retrieved from Contract[selected via ticked Contract number checkbox and with the lowest .Creation_Date]->Agreement->Agreement_Verification[last].Remaining_Attempts

Localization code:

	
- GEN_VerifyCode //Button's main label
	
- GEN_NumberOfAttempts //Number of remaining attempts

## 🔗 Connections (1)

- → Dependency: [[01.148 Validate verification code for client's documentation]]

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
