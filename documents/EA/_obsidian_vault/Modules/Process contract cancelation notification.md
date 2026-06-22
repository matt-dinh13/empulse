---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case"
domain: "Modules"
element_id: 1879005
diagrams: 1
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 Process contract cancelation notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case

## 📝 Notes

This use case describes processing of notification about contract cancelation. This notification provides commodity id which is needed for external validation cancelation process.

## 🔗 Connections (3)

- ← Association: [[Contract Management (Actor 1854674)]]
- → UseCase «include»: [[Cancel external validation]]
- → Dependency: [[Get financial parameters data]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity cancelation
