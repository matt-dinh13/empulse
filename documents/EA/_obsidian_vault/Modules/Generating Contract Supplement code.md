---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules"
domain: "Modules"
element_id: 1870143
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Generating Contract Supplement code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules

## 📝 Notes

The rule for generating Contract Supplement unique identifier.
Input:
- Contract

Algorithm:
System returns a string in form:
     Contract.Code + get count of related ContractSupplement (no matter statuses and types of the contract supplements) and add 1, and then complete the resulting number with zeros from left on 4 digits.

Example:
- Contract number = 4023456789
- Count of the current Contract Supplements = 2 + 1
- Code (Identifier) for the next Contract Supplement = 40234567890003

Output:
- Code of Contract Supplement

## 🔗 Connections (1)

- ← Dependency: [[Create contract supplement rule]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Create Contract Service Supplement - Use Case Model
