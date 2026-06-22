---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1814080
diagrams: 3
connections: 2
tags:
  - guielement
  - requirements-model
---

# 🖥️ Parent full name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

Concatenated additional name of the client. For rules of concatenation see Concatenate person name rules
LDM: Client Snapshot.(Name4, Name5, Name6)

This field can be hidden/masked:

	
- with system  setting.
	
- or if user does not have related access right (see relationships)


Local usage of the name:

Localization code: CLI_ParentName

## 🔗 Connections (2)

- → Dependency: [[{ADD}01.210 Show contract detail (display Parent name)]]
- → Dependency: [[{DEL}01.210 Show contract detail (display additional client data)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: Tab-Client
