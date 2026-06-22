---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions"
domain: "Modules"
element_id: 1800353
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Allowed filename extensions

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions

## 📝 Notes

{ADD CLM-1944 /}
This validation checks the file extension (e.g. JPG, PDF) matches values defined in the SystemConfig.Value (lib_system_config table) where Code = AllowedFileNameExtensions and ActiveYN = 1
Upper case/lower case aren't taken into account

## 🔗 Connections (1)

- ← Dependency: [[Filename Extension validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
