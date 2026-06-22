---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Archivation/Access Rights"
domain: "Modules"
element_id: 1855954
diagrams: 3
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 Archive Contract via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Archivation/Access Rights

## 📝 Notes

This use case describes contract archiving based on external request.


Request is sent by POST on REST API : 
*/rest/v12/contracts/

https://coma.in00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/archiveContract

## 🔗 Connections (5)

- ← Dependency: [[Contract (Interface 1839994)]]
- → InformationFlow: [[DMS (Actor 1855969)]]
- → Realisation: [[Archive Contract via API]]
- ← Association: [[External system (Actor 1855971)]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: archiveContract
- Use Case: Contract Archivation
