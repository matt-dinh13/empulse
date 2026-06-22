---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1835627
diagrams: 4
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Check Service Availability on Salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Input:
- Salesroom
- Service

If GlobalParameter.UseSalespackage = 'TRUE' and GlobalParameter.CheckSalesroomService= 'TRUE' then

	
- Service must be in the set returned by the rule Get Salesroom Sales Items with parameters
- Salesroom
- SalesItemType = SERVICE

Otherwise the condition is evaluated as satisfied.

## 🔗 Connections (6)

- ← Dependency: [[{DEL}Insurance determination]]
- → Dependency: [[Get Salesroom Sales Items]]
- ← Dependency: [[{DEL}Service determination]]
- ← Dependency: [[{MOD}NEW Service determination]]
- ← Dependency: [[POST product recalculation data - service]]
- ← Dependency: [[{MOD} POST service-offers]]

## 📊 Appears In (4 diagrams)

- Custom: Calculate product offer
- Custom: Product and Service selection
- Use Case: Use Case
- Use Case: Use Case
