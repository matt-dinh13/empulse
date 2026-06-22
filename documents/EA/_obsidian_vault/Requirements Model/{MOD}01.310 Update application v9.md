---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1879291
diagrams: 11
connections: 20
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}01.310 Update application v9

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

Use case updates data of the application.

## 🔗 Connections (20)

- ← Realisation: [[ApplicationManagementWS_v23]]
- ← Realisation: [[ApplicationManagementWS_v22 (Interface 1819678)]]
- ← Realisation: [[ApplicationManagementWS_v21 (Interface 1820000)]]
- ← Realisation: [[Application (Class 1822915)]]
- → Dependency: [[Algorithm_ Find user assigned to contract in 2BoD queue]]
- → Dependency: [[Create business event]]
- → Dependency: [[Save application payment channel data]]
- → Dependency: [[Save application DDM data]]
- → Dependency: [[Select user based on SSO token]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Dependency: [[Application Processing]]
- → Dependency: [[Application validation rule]]
- → Dependency: [[Specific attribute processing]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[Update application commodity]]
- → Realisation: [[01.310 Update application v9 - all applications]]
- → Dependency: [[Create application commodity]]
- → Realisation: [[01.310 Update application v9]]
- → Dependency: [[Validate parameters for contract refinancing]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (11 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9371 - Update salesroom on application and contract via API
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Custom: PAYM-1613 - savingOfPaymentChannels
- Custom: PAYM-1613 - updateContractFromTemporaryApplication
- Logical: ApplicationManagementWS_v21 - UpdateApplication
- Logical: ApplicationManagementWS_v22 - UpdateApplication
- Logical: ApplicationManagementWS_v23 - UpdateApplication
- Logical: Update
- Use Case: Access Rights
- Use Case: Use Case
