---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1813876
diagrams: 7
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}Primary e-mail

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

{ADD CLM-3615}
Visibility of the element is controlled by the Email visibility setting rule.
{/ADD}

Logical data type: Email
Mandatory: No
Editable: No
Description: 
Email contact of client
Information from CIF partyRole->emailAddress.email where abstractContact.classification=PRIMARY_EMAIL
Localization code: GEN_Email

## 🔗 Connections (1)

- → Dependency: [[{ADD}Email visibility setting]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: Client detail
- Custom: Client detail - ID
- Custom: Client detail - IN
- Custom: Client detail - KZ
- Custom: Client detail - PH
- Custom: Client detail - VN
