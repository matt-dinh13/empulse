---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules"
domain: "Analysis Model"
element_id: 865583
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Automatic change of branch status for disabled bank

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules

## 📝 Notes

It's not possible to have Active branches for Disabled bank. Therefore when bank's status is changed to Disabled, then also all branches of this bank will be automatically set to Disabled. Status of branches is changed after bank's status is changed in system and confirmed.

## 🔗 Connections (1)

- ← Dependency: [[{MOD} 00.170 Update bank]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
