---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/CEL Account (CELA)/Requirements/CBL-19085 (CLM-5321) DDM validation - test & document/CLM-5321 - DDM validation - test & document"
domain: "Modules"
element_id: 1798544
diagrams: 3
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Process DDM change

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Requirements/CBL-19085 (CLM-5321) DDM validation - test & document/CLM-5321 - DDM validation - test & document

## 📝 Notes

{CLM-5321/}


One of two alternative trigger processing UCs leading to a common third UC to Check DDM account

## 🔗 Connections (3)

- ← Association «Consumer»: [[Kafka]]
- ← UseCase «invoke»: [[{MOD}Check DDM account]]
- ← InformationFlow «consumes»: [[DDMData]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-19085 (CLM-5321) DDM validation - test & document
- Use Case: DDM validation
- Use Case: Use cases
