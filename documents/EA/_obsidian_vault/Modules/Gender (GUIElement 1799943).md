---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Header Client detail/ID"
domain: "Modules"
element_id: 1799943
diagrams: 6
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Gender

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Header Client detail/ID

## 📝 Notes

{CLM-4266/}If user does not have access rights linked this element is hidden or masked (country specific setting).{/ADD}

Logical data type: Enumeration Gender
Mandatory: No
Editable: No
Description: Gender of client. Information from CIF: person.gender {ADD CLM-1135}Show localized Gender Value instead of Gender Code (as is used in Contract detail - Client tab){/ADD}


Localization code: GEN_Gender

## 🔗 Connections (1)

- → Dependency: [[{ADD}06.030 Show client data (display Gender) (Requirement 1799930)]]

## 📊 Appears In (6 diagrams)

- Custom: Client detail - ID
- Custom: Client detail - IN
- Custom: Client detail - KZ
- Custom: Client detail - PH
- Custom: Client detail - VN
- Custom: CLM-4266 - Personal data masking
