---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Access Rights"
domain: "Modules"
element_id: 1881524
diagrams: 3
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract migrate via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Access Rights

## 📝 Notes

{ADD CLM-7630 IN only /}
This use case describes contract migration based on external request.

Request is sent by POST on REST API : 
/rest/v12/contracts/{contractCode}/migrate

## 🔗 Connections (4)

- → Realisation: [[{ADD}Contract cancel]]
- → Realisation: [[{ADD}Contract migrate]]
- → Association: [[External System (Actor 1870013)]]
- → Dependency: [[{ADD}Set contract status to Migrated (COMA)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-31177 (CLM-7630) Migrated contract support
- Use Case: Use Case Model
