---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab"
domain: "Modules"
element_id: 1842954
diagrams: 4
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Check all registration documents

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab

## 📝 Notes

This use case describes the setting of registration attributes for contract, client {ADD CLM-4705} and DDM{/ADD} documents.

## 🔗 Connections (8)

- → UseCase «include»: [[Get registration documents (UseCase 1856105)]]
- → Dependency: [[{ADD}Get User Id based on Employee Number or Client Id]]
- → Dependency: [[{ADD}checkAll (Class 1806656)]]
- → Dependency: [[DMS (Actor 1844332)]]
- → Dependency: [[{ADD}register (Class 1806666)]]
- → Dependency: [[{ADD}setDocumentAttribute]]
- ← UseCase «include»: [[{MOD}Check all registration documents via API]]
- ← UseCase «include»: [[{MOD}Register contract automatically]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab
- Logical: checkAll
- Use Case: Register contract
- Use Case: Uncheck/Check
