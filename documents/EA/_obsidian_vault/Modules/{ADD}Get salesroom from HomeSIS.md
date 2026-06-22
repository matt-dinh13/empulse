---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/HomeSIS API/Business Rules"
domain: "Modules"
element_id: 1734969
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get salesroom from HomeSIS

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/HomeSIS API/Business Rules

## 📝 Notes

{ADD PCG-3888/}
Data of salesroom is retrieved from external module (HomeSIS) by REST service call with GET request: HomeSIS API/salesrooms/{salesroomCode}

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Cancel external validation - validation]]
- ← Dependency: [[{MOD}Commodity - validation]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Validation Rules
- Use Case: Commodity cancelation
