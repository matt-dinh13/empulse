---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822338
diagrams: 1
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance icon rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

This rule describes condition for displaying of insurance icon.

Evaluation duration:
Meaning: Information whether contract has or hasn't got insurance (Service category = 'INSURANCE').
Source: ContractService.Service.ServiceType.Category
Visibility rule: Displayed only if at least one insurance service exists for contract.

## 🔗 Connections (9)

- ← Dependency: [[Custom Search]]
- ← Dependency: [[Contracts for registration (Class 1822370)]]
- ← Dependency: [[Cancelled Contracts]]
- ← Dependency: [[Contracts in process]]
- ← Dependency: [[Custom SNM search (Class 1822365)]]
- ← Dependency: [[Extended Custom Search]]
- ← Dependency: [[{MOD}Nonreimbursed Contracts]]
- ← Dependency: [[Reimbursed Contracts]]
- ← Dependency: [[Contracts for 2nd BoD filling]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
