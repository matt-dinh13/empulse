---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF"
domain: "Analysis Model"
element_id: 1538235
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verify code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF

## 📝 Notes

Localization code: 
- GEN_VerifyCode -> button label
- GEN_NumberOfAttempts -> number of remaining attempts

Other:
Button label consists of localization code and number of available attempts , eg. Verify code (2 attempts). Value for available attempts is retrieved from TempAppl_Contact_Verification.Remaining_attempts

## 🔗 Connections (1)

- → Dependency: [[01.091 Validate verification code for contact (UseCase 1821371)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact to client verification - product AF
