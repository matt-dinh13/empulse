---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1869813
diagrams: 3
connections: 3
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD} 01.820 Get ContractREWServiceStatus

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

{ADD IS-2400}
PH only
The use case describes getting REW service status for all active periods on external request.

Endpoint example:
/bsl/openapi/v3.0/contractservices/{serviceId}/celrewevaluation?contractCode=4100026885

## 🔗 Connections (3)

- ← Dependency: [[REWServiceStatus]]
- → Realisation: [[01.820 Get ContractREWServiceStatus]]
- → Association: [[External system (Actor 1880866)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Contract REW Service Status
- Use Case: Contract Service Requests - Use Case Model
