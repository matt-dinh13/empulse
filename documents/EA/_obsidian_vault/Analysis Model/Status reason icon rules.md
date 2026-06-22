---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822340
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Status reason icon rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

This rule describes conditions for display of Status reason icon.

Reason:
Meaning: Text information about reason why was contract moved to this status
Source: Contract->ContractStatusTransitions->ContractStatusTransitionsReasons.Code is translated to localized value
Visibility rule: Displayed only for contracts whose last contract status transition contains transition reason

## 🔗 Connections (6)

- ← Dependency: [[Custom Search]]
- ← Dependency: [[Contracts for registration (Class 1822370)]]
- ← Dependency: [[Cancelled Contracts]]
- ← Dependency: [[Contracts in process]]
- ← Dependency: [[{MOD}Nonreimbursed Contracts]]
- ← Dependency: [[Reimbursed Contracts]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
