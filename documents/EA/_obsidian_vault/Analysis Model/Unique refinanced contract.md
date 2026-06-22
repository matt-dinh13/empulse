---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773418
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Unique refinanced contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Each refinanced contract must be unique.
If multiple refinanced contracts with identical contractNumber and internal flag values exist, this validation fails (MSG_UniqueRefinancedContracts).

## 🔗 Connections (1)

- ← Dependency: [[Application validation rule (Requirement 1773433)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
