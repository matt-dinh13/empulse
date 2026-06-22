---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Access Rights"
domain: "Modules"
element_id: 1869937
diagrams: 2
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract cancel via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Access Rights

## 📝 Notes

{ADD CLM-6038/}
This use case describes contract cancellation based on external request.


Request is sent by POST on REST API : 
*/rest/v12/contracts/

https://coma.in00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/cancel

## 🔗 Connections (6)

- → Usage: [[{ADD}Check for active incoming payments (COMA) (Requirement 1867044)]]
- → Usage: [[{ADD}Creation of contract cancellation request (COMA) (Requirement 1867045)]]
- → Realisation: [[{ADD}Contract cancel (Requirement 1838307)]]
- → Dependency «notify»: [[{DEL}BSL]]
- → Usage: [[Set contract status to Cancelled rule (COMA)]]
- ← Association: [[External system (Actor 1869946)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract cancellation
