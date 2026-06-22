---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1814074
diagrams: 2
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ Primary email

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

Primary email of the client.

Visibility of the element is controlled by the Email visibility setting rule.

LDM source:
Contract->Deal->Client_Snapshot->Client_Snapshot_Contact->Contact[.Contact_Type_Code='PRIMARY_EMAIL'].Contact_Value

Localization code:
GEN_Email

## 🔗 Connections (1)

- → Dependency: [[Email visibility setting]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: Tab-Client
