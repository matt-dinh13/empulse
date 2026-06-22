---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1638585
diagrams: 3
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ Street name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

Name of the street (from the respective address).

On the Application detail and Contract detail screens, this element is visible only if user has the 01.210 Show contract detail (show client address data) privilege granted.

LDM source:
*.Street_name
- where * stands for the particular superior entity given by the context (e.g. Temporary_Application, Partner, etc.).

Localization code:
ADR_Street

## 🔗 Connections (1)

- → Dependency: [[01.210 Show contract detail (show client address data)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: Show Address - PH
- Custom: Show Address (Application/Contract detail) - PH
