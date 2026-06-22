---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Access Rights"
domain: "Modules"
element_id: 1881521
diagrams: 3
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract migration rollback via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Access Rights

## 📝 Notes

{ADD CLM-7630 IN only /}
This use case describes contract migration rollback based on external request.

Request is sent by POST on REST API : 
/rest/v12/contracts/{contractCode}/migration-rollback

## 🔗 Connections (4)

- → Association: [[External System (Actor 1870013)]]
- → Realisation: [[{ADD}Contract migration rollback]]
- → Dependency: [[{ADD}Rollback contract status from migrated (COMA)]]
- → Realisation: [[{ADD}Contract cancel]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-31177 (CLM-7630) Migrated contract support
- Use Case: Use Case Model
