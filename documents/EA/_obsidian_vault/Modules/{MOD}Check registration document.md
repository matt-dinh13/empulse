---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Uncheck/Check documents/Access Rights"
domain: "Modules"
element_id: 1842950
diagrams: 6
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Check registration document

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Uncheck/Check documents/Access Rights

## 📝 Notes

{ADD CLM-5305/}
Technical use case for setting the registration attributes to do with {ADD CSI-2724}(un){/ADD}checking of a single contract document.

## 🔗 Connections (5)

- → UseCase «include»: [[Get registration documents (UseCase 1856105)]]
- → Dependency: [[DMS (Actor 1844332)]]
- ← UseCase «include»: [[{MOD}Check registration document via API]]
- → Realisation: [[{ADD}Check registration documents]]
- → Dependency: [[{ADD}Get User Id based on Employee Number or Client Id]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab
- Custom: CLM-5305 - REST API checkDocument
- Logical: checkDocument
- Logical: uncheckDocument
- Use Case: Uncheck/Check
