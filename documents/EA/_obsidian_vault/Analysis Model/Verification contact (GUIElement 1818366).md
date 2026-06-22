---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818366
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verification contact

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Client's contact phone number used for sending the generated OTP verification code.

Pre-filled with the value of the client's primary mobile retrieved from the oldest selected application (via ticked Contract number checkbox) and disabled (not editable).

LDM source:
Contract[selected via ticked Contract number checkbox and with the lowest .Creation_Date]->Deal->Client_Snapshot->Client_Snapshot_Contact->Contact[.Contact_Type_Code='PRIMARY_MOBILE'].Contact_Value

Localization code: 
APP_ContactUnderVerification

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
