---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822341
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Registration status icon rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

This rule describes conditions for display of registration status icon.

Registration status:
Meaning: Current registration status
Source: Contract.RegistrationStatus
Visibility rule: Displayed only for contracts in status Signed
Other: Different icon will be displayed for each existing registration status (Not ready for registration, Ready for registration, Registered)

## 🔗 Connections (6)

- ← Dependency: [[Custom Search]]
- ← Dependency: [[Contracts for registration (Class 1822370)]]
- ← Dependency: [[Cancelled Contracts]]
- ← Dependency: [[Contracts in process]]
- ← Dependency: [[{MOD}Nonreimbursed Contracts]]
- ← Dependency: [[Reimbursed Contracts]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
