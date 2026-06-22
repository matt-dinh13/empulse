---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1879298
diagrams: 6
connections: 9
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}01.314 Create application externally

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

This use case is called only via WS interface. Use case creates an application

## 🔗 Connections (9)

- ← Realisation: [[ApplicationManagementWS_v23]]
- ← Realisation: [[ApplicationManagementWS_v22 (Interface 1819678)]]
- ← Realisation: [[ApplicationManagementWS_v21 (Interface 1820000)]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[Save application DDM data]]
- → Dependency: [[Save application payment channel data]]
- → Realisation: [[01.134 Create application externally]]
- → Dependency: [[Update application commodity]]
- → Dependency: [[Create application commodity]]

## 📊 Appears In (6 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Logical: ApplicationManagementWS_v21 - CreateApplication
- Logical: ApplicationManagementWS_v22 - CreateApplication
- Logical: ApplicationManagementWS_v23 - CreateApplication
- Use Case: Access Rights
