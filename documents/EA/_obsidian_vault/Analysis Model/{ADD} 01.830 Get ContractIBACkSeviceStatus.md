---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1869790
diagrams: 3
connections: 3
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD} 01.830 Get ContractIBACkSeviceStatus

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

{ADD IS-2617} {PH only}
The use case describes getting Interest Back service status for all active periods for the contract.

Endpoint example:
/bsl/openapi/v3.0/contractservices/{serviceId}/interestbackstatus?contractCode=4100026885

## 🔗 Connections (3)

- → Realisation: [[01.830 Get ContractIBACKServiceStatus]]
- ← Dependency: [[InterestBackStatus]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Contract IBACK Service status
- Use Case: Contract Service Requests - Use Case Model
