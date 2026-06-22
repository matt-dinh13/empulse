---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract information/Access rights"
domain: "Analysis Model"
element_id: 1631402
diagrams: 5
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.754 Get contract detail

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract information/Access rights

## 📝 Notes

The use case provides a list of contract details of a client when an external system calls ContractWS.GetContractDetail method.
This method does not provide data of applications before signature

## 🔗 Connections (3)

- → Realisation: [[01.754 Get contract detail]]
- ← Dependency: [[(MOD)ContractWS]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (5 diagrams)

- Custom: Access rights
- Custom: CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services
- Custom: CLM-622 (CBL-219) Credit Card MMIL definition
- Logical: ContractWS - GetContractDetail method
- Use Case: Provide contract information
