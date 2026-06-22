---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model"
domain: "Analysis Model"
element_id: 1878448
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Select sales process type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model

## 📝 Notes

This algorithm defines which sales process will be selected.

Inputs:
flag on related Salesroom (FS) - values: '1SP', '2SP', '1and2SP'

Algorithm:
1. If FS = '1SP', then one-stage process is selected and this algorithm ends.
2. If FS = '2SP' then two-stage process is selected and this algorithm ends.
3. If FS = '1and2SP' then no process is selected and this algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.020 Create contract]]

## 📊 Appears In (2 diagrams)

- Use Case: Choose product offer
- Use Case: Contract origination
