---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/Access Rights"
domain: "Analysis Model"
element_id: 1274812
diagrams: 4
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}09.276 Assign sales package to salesroom

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/Access Rights

## 📝 Notes

{ADD PCG-822_17/}
This UC is intended for manual assignment of sales packages to particular salesroom to be available for offering to clients on this salesroom.

## 🔗 Connections (10)

- → UseCase «include»: [[{DEL}09.307 Archive Sales Package Assignment]]
- → UseCase «include»: [[{DEL}09.305 Get Sales Package Assignment]]
- → Realisation: [[{ADD}09.276 Assign sales package to salesroom]]
- → Realisation: [[REQ2 - Rules for setting of validity of Product assignment to Salesroom]]
- → Realisation: [[REQ1 - Products available to be assigned to salesroom]]
- → UseCase «include»: [[{DEL}09.304 Set Sales Package Assignment]]
- ← Realisation: [[{MOD}Assign]]
- ← Realisation: [[Assign Sales Packages to Salesroom]]
- ← Realisation: [[Assign Sales Package Items]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Assign Sales Package to Salesroom
- Custom: tab Sales Packages
- Use Case: Manage Sales Packages on Salesroom
