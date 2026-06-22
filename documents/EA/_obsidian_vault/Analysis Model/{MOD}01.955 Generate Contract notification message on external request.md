---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Access Rights"
domain: "Analysis Model"
element_id: 1854519
diagrams: 3
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.955 Generate Contract notification message on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Access Rights

## 📝 Notes

This use case describes processing of the request for resending notification messages for listed contracts.
The use case is started defined time by automatic job (Contract notification resending job).

## 🔗 Connections (5)

- → Dependency: [[Contract notification resending job]]
- → Dependency: [[Setting Event type by Contract status rule]]
- → Realisation: [[{ADD}01.955 Generate ContractFullInfo notification on external request]]
- ← Dependency «invokes»: [[01.950 Process request for Contract notification]]
- ← UseCase: [[Time (Actor 1880869)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-14685 (CLM-4204) Migrate ContractFullInfoRequest to RabbitMQ
- Use Case: Sending Contract notification on request
