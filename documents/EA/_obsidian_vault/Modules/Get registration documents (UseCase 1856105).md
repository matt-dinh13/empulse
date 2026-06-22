---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Get registration documents/Access Rights"
domain: "Modules"
element_id: 1856105
diagrams: 7
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 Get registration documents

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Get registration documents/Access Rights

## 📝 Notes

This use case describes getting contract registration documents (contract, client and DDM documents).

## 🔗 Connections (9)

- ← UseCase «include»: [[{MOD}Check all registration documents]]
- ← UseCase «include»: [[{MOD}Uncheck all registration documents]]
- ← UseCase «include»: [[{MOD}Check registration document]]
- → Dependency: [[BSL (Actor 1844327)]]
- ← UseCase «include»: [[{MOD}Get registration documents via API]]
- → Dependency: [[DMS (Actor 1844332)]]
- → Dependency: [[getRegistrationDocuments (Class 1855965)]]
- ← UseCase «include»: [[{MOD}Register contract]]
- ← Dependency: [[{MOD}Register contract]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-19696 (CSI-2724) DMS integration - Contract detail - Registration tab
- Custom: CLM-5305 - REST API checkDocument
- Logical: getRegistrationDocuments
- Use Case: Get registration documents
- Use Case: Register contract
- Use Case: Uncheck/Check
