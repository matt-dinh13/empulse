---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab"
domain: "Modules"
element_id: 1842952
diagrams: 3
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Uncheck all registration documents

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab

## 📝 Notes

{ADD CLM-4666/}
This use case describes the setting attribute REGISTRATION_CHECK to 'false' and nulling the remaining two registration attributes for contract documents.

## 🔗 Connections (6)

- → Dependency: [[{ADD}Get User Id based on Employee Number or Client Id]]
- → UseCase «include»: [[Get registration documents (UseCase 1856105)]]
- → Dependency: [[{ADD}uncheckAll]]
- → Dependency: [[DMS (Actor 1844332)]]
- ← UseCase «include»: [[{MOD}Uncheck all registration documents via API]]
- → Dependency: [[{ADD}register (Class 1806666)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab
- Logical: uncheckAll
- Use Case: Uncheck/Check
