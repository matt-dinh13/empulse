---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1813878
diagrams: 8
connections: 4
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}Birth date

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

{CLM-4255/}If user does not have access rights linked to this element is hidden or masked (country specific setting).{/ADD}

Logical data type: Date and Time
Mandatory: No
Editable: No
Description: Birth data of client. Information from CIF person.birthDate

Localization code: GEN_BirthDate

## 🔗 Connections (4)

- → Dependency: [[{ADD}08.900 Show available collection tools for client's contracts (display Date of birth)]]
- → Dependency: [[{ADD}06.030 Show client data (display Date of birth)]]
- → Dependency: [[{DEL}06.030 Show client data (display additional client data)]]
- → Dependency: [[{DEL}08.900 Show available collection tools for client's contracts (display additional client data)]]

## 📊 Appears In (8 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: Client detail
- Custom: Client detail - ID
- Custom: Client detail - IN
- Custom: Client detail - KZ
- Custom: Client detail - PH
- Custom: Client detail - VN
