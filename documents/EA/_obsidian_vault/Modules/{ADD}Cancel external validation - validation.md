---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case"
domain: "Modules"
element_id: 1746312
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Cancel external validation - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case

## 📝 Notes

- commodityId
required
must exists in Commodity
	
- salesroomCode
required
must exists in salesroom obtained via Get salesroom from HomeSIS

## 🔗 Connections (2)

- → Dependency: [[{ADD}Get salesroom from HomeSIS]]
- ← Dependency: [[Cancel external validation]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity cancelation
