---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Archive Contract/Access Rights"
domain: "Modules"
element_id: 1869930
diagrams: 2
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract archive via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Archive Contract/Access Rights

## 📝 Notes

{ADD CLM-4529/}
This use case describes contract archivation based on external request.


Request is sent by POST on REST API : 
*/rest/v12/contracts/

https://coma.in00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/archiveContract

## 🔗 Connections (3)

- → Realisation: [[{ADD}Contract archive]]
- → Association «notify»: [[DMS (Actor 1869949)]]
- ← Association: [[External system (Actor 1869946)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Archivation
