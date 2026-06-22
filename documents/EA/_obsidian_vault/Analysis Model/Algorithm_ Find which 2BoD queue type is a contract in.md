---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/UseCase Model"
domain: "Analysis Model"
element_id: 1351505
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Find which 2BoD queue type is a contract in

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/UseCase Model

## 📝 Notes

Input: Contract ID

1. System finds if contract is currently in 2BoD queue by finding a corresponding ticket by Algorithm Check if contract is currently in 2BoD queue.
2. If a ticket is not found, algorithm ends with result 'contract is currently not in 2BoD queue'.
3. Else system returns type of 2BoD queue from Application_Filling_Queue.Filling_Group.

## 🔗 Connections (3)

- ← Dependency: [[Type of 2BoD queue]]
- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[Fill in application (2BoD) (GUIElement 1871794)]]

## 📊 Appears In (1 diagrams)

- Use Case: 2BoD processing
