---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract information/Access rights"
domain: "Analysis Model"
element_id: 1631396
diagrams: 4
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.753 Get contract list

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract information/Access rights

## 📝 Notes

The use case provides list of contracts of a client when an external system calls ContractWS.GetContractList method

## 🔗 Connections (3)

- → Realisation: [[01.753 Get contract list]]
- ← Dependency: [[(MOD)ContractWS]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access rights
- Custom: CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services
- Logical: ContractWS - GetContractList method
- Use Case: Provide contract information
