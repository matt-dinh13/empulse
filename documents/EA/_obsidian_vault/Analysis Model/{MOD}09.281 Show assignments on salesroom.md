---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/Access Rights"
domain: "Analysis Model"
element_id: 1265312
diagrams: 3
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}09.281 Show assignments on salesroom

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/Access Rights

## 📝 Notes

{ADD PCG-822_18}Renamed from Show products on salesroom to Show assignments on salesroom{/ADD}

This UC is intended for displaying of list of {DEL PCG-822_18}products{/DEL}{ADD PCG-822_18}items{/ADD} assigned to currently chosen salesroom. 
System displays list of found {DEL PCG-822_18}products{/DEL}{{ADD PCG-822_18}items{/ADD} with basic information about each of them.

## 🔗 Connections (4)

- → Realisation: [[{MOD}09.281 Show assignments on salesroom (Requirement 1265478)]]
- → UseCase «include»: [[{DEL}09.308 Get Salesroom Sales Item]]
- ← Dependency: [[Salesroom Assignment View]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: Salesroom Assignment View
- Use Case: Salesroom Assignment UC
