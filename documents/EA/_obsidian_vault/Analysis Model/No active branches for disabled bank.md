---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules"
domain: "Analysis Model"
element_id: 865582
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 No active branches for disabled bank

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules

## 📝 Notes

It's not possible to set bank branch status to Active for bank which has status Disabled.

If user selects status Active for branch whose bank has status Disabled, then user will get error message MSG_CANT_SET_ACTIVE_BRANCH_FOR_DISABLED_BANK

## 🔗 Connections (3)

- ← Dependency: [[{MOD} 00.130 Update bank branch]]
- ← Dependency: [[{MOD} 00.120 Create bank branch]]
- ← Dependency: [[Bank branch status (GUIElement 1761581)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Custom: Create/Update bank branch
