---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/CEL Account (CELA)/Requirements/CBL-19085 (CLM-5321) DDM validation - test & document/CLM-5321 - DDM validation - test & document"
domain: "Modules"
element_id: 1798543
diagrams: 3
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Process contract change

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Requirements/CBL-19085 (CLM-5321) DDM validation - test & document/CLM-5321 - DDM validation - test & document

## 📝 Notes

{CLM-5321/}


One of two alternative trigger processing UCs leading to a common third UC to Check DDM account

## 🔗 Connections (4)

- ← Association «Consumer»: [[Kafka]]
- ← UseCase «invoke»: [[{MOD}Check DDM account]]
- ← InformationFlow: [[{ADD}ContractSigned (Class 1802422)]]
- ← InformationFlow: [[{ADD}ContractSigned (Class 1838592)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-19085 (CLM-5321) DDM validation - test & document
- Use Case: DDM validation
- Use Case: Use cases
