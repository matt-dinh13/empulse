---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules"
domain: "Modules"
element_id: 1596804
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Set Insurance Program Version number

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules

## 📝 Notes

Rule for generating of number for new version of versioned object.
Version number
1 for the first version (when creating a new instance)
N+1 for other versions (when creating a new version of existing instance), N is maximal version in object scope.
If version number > 999 then error is generated and parent use case is terminated.

## 🔗 Connections (2)

- ← Dependency: [[08.530 Create Insurance Program version (UseCase 1597097)]]
- ← Dependency: [[08.525 Create Insurance Program by copy (UseCase 1597090)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Insurance Program management - Use Case Model
