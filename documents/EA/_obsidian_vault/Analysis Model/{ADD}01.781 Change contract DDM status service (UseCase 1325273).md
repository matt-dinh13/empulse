---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract operation API/Contract DDM operations/Access Right"
domain: "Analysis Model"
element_id: 1325273
diagrams: 4
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}01.781 Change contract DDM status service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract operation API/Contract DDM operations/Access Right

## 📝 Notes

{ADD CLM-1204/ }
This use case describes changing DDM status of DDM related a contract. The functionality is exposed as web service to usage by an external system.

## 🔗 Connections (4)

- ← Dependency: [[ContractPaymentChannelManagementWS]]
- → Realisation: [[REQ #1 - Expose API for change Contract DDM status]]
- → Realisation: [[{ADD}01.781 Change contract DDM status service]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Right
- Custom: CBL-2848 (CLM-1204) E-mandate DDM status update via Web Service
- Logical: ContractPaymentChannelManagementWS - ChangeContractDDMStatus
- Use Case: Contract DDM operations
