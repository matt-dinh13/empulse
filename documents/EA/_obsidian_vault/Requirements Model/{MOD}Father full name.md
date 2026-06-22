---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1813872
diagrams: 6
connections: 4
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}Father full name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

{CLM-4255/}If user does not have access rights linked to this element is hidden or masked (country specific setting).{/ADD}

Concatenated additional name of the client. For rules of concatenation see Concatenate person name rules

Read only

Localization code: CLI_ParentName

## 🔗 Connections (4)

- → Dependency: [[{DEL}08.900 Show available collection tools for client's contracts (display additional client data)]]
- → Dependency: [[{DEL}06.030 Show client data (display additional client data)]]
- → Dependency: [[{ADD}08.900 Show available collection tools for client's contracts (display Parent name)]]
- → Dependency: [[{ADD}06.030 Show client data (display Parent name)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: Client detail
- Custom: Client detail - IN
- Custom: Client detail - KZ
- Custom: Client detail - PH
