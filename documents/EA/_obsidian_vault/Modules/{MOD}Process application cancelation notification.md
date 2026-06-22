---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case"
domain: "Modules"
element_id: 1879014
diagrams: 1
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Process application cancelation notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case

## 📝 Notes

This use case describes processing of notification about application cancellation. This notification provides data for obtaining commodity id from offer which is needed for external validation cancellation process.

## 🔗 Connections (4)

- ← Association: [[Loan Origination (Actor 1854676)]]
- → Dependency: [[{ADD}Get Application data]]
- → Dependency: [[{ADD}Get offer data]]
- → UseCase «include»: [[Cancel external validation]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity cancelation
