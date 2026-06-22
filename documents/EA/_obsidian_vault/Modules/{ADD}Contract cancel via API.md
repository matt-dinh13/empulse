---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract cancellation/Access Rights"
domain: "Modules"
element_id: 1807301
diagrams: 6
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract cancel via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract cancellation/Access Rights

## 📝 Notes

{ADD CLM-6038/}
This use case describes contract cancellation based on external request.


Request is sent by POST on REST API : 
*/rest/v12/contracts/

https://coma.in00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/cancel

## 🔗 Connections (8)

- → Usage: [[{ADD}Check for active incoming payments (COMA)]]
- → Realisation: [[{ADD}Contract cancel]]
- → Usage: [[{ADD}Creation of contract cancellation request (COMA)]]
- → Usage: [[{ADD}Set contract status to Cancelled rule (COMA)]]
- → Dependency «notify»: [[BSL (Actor 1855968)]]
- → Dependency: [[External System (Actor 1870013)]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-23420 (CLM-6038) Contract cancellation API
- Logical: cancelContract
- Logical: cancelContract
- Use Case: Cancel contract after sign
- Use Case: Contract cancellation
