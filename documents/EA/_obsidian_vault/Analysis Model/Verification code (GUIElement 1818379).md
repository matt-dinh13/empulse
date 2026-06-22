---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818379
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verification code

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Input field for the OTP code being verified.

Editable only after the verification code is generated (i.e. when Contract[selected via ticked Contract number checkbox and with the lowest .Creation_Date]->Agreement->Agreement_Verification[last].External_ID is not null).

Localization code:
GEN_VerificationCode

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
