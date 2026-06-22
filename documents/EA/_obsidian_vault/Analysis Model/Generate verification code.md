---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF"
domain: "Analysis Model"
element_id: 1538234
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generate verification code

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client verification - product AF

## 📝 Notes

Localization code: 
- GEN_GenerateVerificationCode -> button label
- GEN_NumberOfAttempts -> number of remaining attempts

Other:
Button label consists of localization code and number of available attempts , eg. Generate verification code (2 attempts). Value for available attempts is counted = global parameter MAX_GENERATION_OF_VERIF_CODE - Count(TempAppl_Contact.TempAppl_Contact_Verification of the record with Contact Value=value of the contact saved on the application form

## 🔗 Connections (1)

- → Dependency: [[01.090 Generate verification code for contact validation (UseCase 1821372)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact to client verification - product AF
