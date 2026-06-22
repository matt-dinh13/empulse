---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877486
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Debt catalogue calculation formula

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

This is a composite rule which stands for all calculations needed for creation of a contract's debt catalogue. This rule itself doesn't contain any rules directly, but all other calculation rules are parts of this rule. For calculation details please see individual calculation business rules connected to this rule.

Notice: All these calculation are intended for CEL contracts only.

## 🔗 Connections (5)

- ← Aggregation: [[Next installment calculations]]
- ← Aggregation: [[Debt specific installment part type calculation]]
- ← Aggregation: [[Payable today calculations]]
- ← Aggregation: [[Incoming payment calculations]]
- ← Aggregation: [[Overdue installment calculations]]

## 📊 Appears In (5 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt full info calculations
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Use Case: Contract debt tracking
- Use Case: OVERVIEW - Installment Schedule
