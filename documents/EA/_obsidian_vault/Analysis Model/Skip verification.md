---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF"
domain: "Analysis Model"
element_id: 1538232
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Skip verification

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF

## 📝 Notes

Localization code: 
APP_VerificationSkip

If global parameter SkipOTPButtonEnabled=TRUE, then enabled, otherwise Default disabled.
Visibility on initialization:
If all attempts for code generation were used (count of TempAppl_Contact.TempAppl_Contact_Verification of verified contact >= global parameter MaxSendingOfVerificationCode) and countdown finished (current time > Dispatch.Valid_To), then the button is enabled, otherwise disabled.

## 🔗 Connections (1)

- → Dependency: [[01.092 Cancel contact validation (UseCase 1821369)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact to client verification - product AF
