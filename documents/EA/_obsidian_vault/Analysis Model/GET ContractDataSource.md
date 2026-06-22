---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Data Source Management/ContractDataSource (REST)"
domain: "Analysis Model"
element_id: 1878520
diagrams: 2
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 GET ContractDataSource

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Data Source Management/ContractDataSource (REST)

## 📝 Notes

This use case describes the steps, how system generates the HO_CONTRACT_DATA data source for a selected contract specified on the input and provides it to the external system.

## 🔗 Connections (5)

- ← Realisation: [[ContractDataSource]]
- → Dependency: [[List of interfaces called in parallel]]
- → UseCase «include»: [[01.008 Download file from document archive (UseCase 1851467)]]
- → Dependency: [[Get data for data source generation from other modules]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (2 diagrams)

- Logical: ContractDataSource (REST)
- Logical: External Reference
