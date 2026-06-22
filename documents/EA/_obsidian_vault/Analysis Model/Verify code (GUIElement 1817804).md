---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/User Interface Model - Consent verification"
domain: "Analysis Model"
element_id: 1817804
diagrams: 2
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verify code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/User Interface Model - Consent verification

## 📝 Notes

Localization code: 
- GEN_VerifyCode -> button label
- GEN_NumberOfAttempts -> number of remaining attempts

Other:
Button label consists of localization code and number of available attempts (eg. Verify code (2 attempts)). Value for available attempts is retrieved from TempAppl Document Verification.Remaining_attempts

## 🔗 Connections (1)

- → Dependency: [[01.146 Validate verification code for consent (UseCase 1819572)]]

## 📊 Appears In (2 diagrams)

- Custom: Public verification panel
- Custom: Verification panel
