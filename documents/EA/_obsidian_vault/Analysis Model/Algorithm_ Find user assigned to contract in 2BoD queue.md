---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/UseCase Model"
domain: "Analysis Model"
element_id: 1351507
diagrams: 2
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Find user assigned to contract in 2BoD queue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/UseCase Model

## 📝 Notes

Algorithm finds operator currently assigned to contract for 2BoD filling.

Input: contract id.

1. System finds a record in Application_Filling_Queue for given contract in status 'Assigned'.
2. If no such record is found, system returns 0 meaning "no user currently assigned to given contract".
3. Else System returns user associated to found record (Application_Filling_Queue.Assigned_To).

## 🔗 Connections (8)

- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[{MOD}01.170 Update offer externally]]
- ← Dependency: [[01.168 Refuse offers externally]]
- ← Dependency: [[01.167 Accept offer externally (UseCase 1827726)]]
- ← Dependency: [[Fill in application (2BoD) (GUIElement 1871794)]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[{MOD}01.310 Update application v9]]

## 📊 Appears In (2 diagrams)

- Use Case: 2BoD processing
- Use Case: Fill in application
