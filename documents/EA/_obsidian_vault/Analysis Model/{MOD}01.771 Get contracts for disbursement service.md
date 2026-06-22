---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract information/Access rights"
domain: "Analysis Model"
element_id: 1631395
diagrams: 6
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.771 Get contracts for disbursement service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract information/Access rights

## 📝 Notes

The use case presents a service for returning a list of contracts for disbursement based on calling ContractWS.GetContractForDisbursement method.
This method does not provide data of applications before signature

## 🔗 Connections (3)

- → Realisation: [[01.771 Get contracts for disbursement service]]
- ← Dependency: [[(MOD)ContractWS]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (6 diagrams)

- Custom: Access rights
- Custom: CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services
- Custom: CBL-5208 (CLM-3081) Cash by Code
- Custom: CLM-102 (CBL-49) Online information about contract for money disbursement
- Logical: ContractWS - GetContractForDisbursement
- Use Case: Provide contract information
