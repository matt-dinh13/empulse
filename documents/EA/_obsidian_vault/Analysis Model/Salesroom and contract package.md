---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Business Rules"
domain: "Analysis Model"
element_id: 1218232
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Salesroom and contract package

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Business Rules

## 📝 Notes

Only one contract package with attributes Contract_Package.Location = 'POS' and Contract_Package.Status = 'ACTIVE' can exist for a current salesroom.

## 🔗 Connections (1)

- ← Dependency: [[01.200 Add to contract package (UseCase 1759983)]]

## 📊 Appears In (2 diagrams)

- Logical: Business Rules
- Use Case: Contract tracking
