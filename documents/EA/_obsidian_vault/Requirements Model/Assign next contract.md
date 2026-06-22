---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-19215 (CLM-5401) assignTicketFromQueue - add tickets limit per user"
domain: "Requirements Model"
element_id: 1868352
diagrams: 5
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Assign next contract

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-19215 (CLM-5401) assignTicketFromQueue - add tickets limit per user

## 📝 Notes

Action that assigns new contract from TCK queue to current user according to selected type (Registration or mistake) (uses assignTicketFromQueue TCK API.
Button is visible only if  the role of the user has UC01_283
and  UC01_283_Assign_Next_Contract  access right granted.

Localization code: CON_Assign_Next_Contract_To_Me

## 📊 Appears In (5 diagrams)

- Custom: CBL-19215 (CLM-5401) assignTicketFromQueue - add tickets limit per user
- Custom: CBL-19733 (CLM-5626) TCK integration update
- Custom: CBL-6256 (CLM-2060) Select all documents for registration
- Custom: Contract registration
- Custom: REQ #1 - Add radio buttons Registration and Mistake investigation
