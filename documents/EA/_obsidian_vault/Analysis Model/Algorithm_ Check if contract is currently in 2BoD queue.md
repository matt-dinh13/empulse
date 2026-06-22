---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/UseCase Model"
domain: "Analysis Model"
element_id: 1351509
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Check if contract is currently in 2BoD queue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/UseCase Model

## 📝 Notes

Validation checks that the contract is currently in queue for 2nd block of data filling.

Input: contract ID.

1. System checks that contract status is 'In pre-process' and sub-status is  'Draft', otherwise the result is negative.
2. System finds record Application_Filling_Queue for given contract in status 'OPEN' or 'ASSIGNED'.
3. If some record is found, contract is in 2BoD queue; the result is positive (negative otherwise).

## 🔗 Connections (3)

- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[Refresh evaluation (GUIElement 1871797)]]
- ← Dependency: [[Fill in application (2BoD) (GUIElement 1871794)]]

## 📊 Appears In (1 diagrams)

- Use Case: 2BoD processing
