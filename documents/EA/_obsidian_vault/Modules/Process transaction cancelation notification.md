---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case"
domain: "Modules"
element_id: 1879027
diagrams: 1
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 Process transaction cancelation notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case

## 📝 Notes

This use case describes processing of notification about transaction cancelation. This notification provides commodity id needed for external validation cancelation process.

## 🔗 Connections (3)

- ← Association: [[Account Management (Actor 1854678)]]
- → Dependency: [[Get sales quote data]]
- → UseCase «include»: [[Cancel external validation]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity cancelation
