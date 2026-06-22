---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Business rules"
domain: "Analysis Model"
element_id: 1371163
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Delete contract financial partnership algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Business rules

## 📝 Notes

Removal of contract financial partnership, e.g. Joint Financial Scheme (JFS) partnership

Input
Contract

Steps
For each Contract -> Contract Party Role [Role Type = JFS_PARTNER, Archived = FALSE]
a) Set ContractPartyRole.Archived = TRUE
b) For all ContractPartyRole -> Contract Party Role Attribute [Archived = FALSE] set Archived = TRUE

## 🔗 Connections (2)

- ← Dependency: [[Update contract financial partnership algorithm]]
- ← Dependency: [[Set contract default JFS partnership algorithm]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Financial partnership
