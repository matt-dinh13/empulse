---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules"
domain: "Analysis Model"
element_id: 1441255
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance Program Version number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules

## 📝 Notes

Rule for generating of number for new version of versioned object.
Version number
1 for the first version (when creating a new instance)
N+1 for other versions (when creating a new version of existing instance), N is maximal version in object scope.
If version number > 999 then error is generated and parent use case is terminated.

## 🔗 Connections (3)

- ← Dependency: [[08.525 Create Insurance Program by copy (UseCase 1517634)]]
- ← Dependency: [[08.520 Create Insurance Program (UseCase 1517632)]]
- ← Dependency: [[08.530 Create Insurance Program version (UseCase 1517624)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules for Insurance Program Versioned Entity
