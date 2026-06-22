---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules"
domain: "Modules"
element_id: 1877997
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get Application data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules

## 📝 Notes

{ADD PCG-3888/}
Retrieve data about application by calling ApplicationManagementWS - GetApplicationData with parameters 
- applicationCode
- dataSet = OFFER
- dataSet = APPLICATION_LOG
- dataSet = COMMODITY

note: role APPLICATION_MANAGEMENT_R is needed on user

## 🔗 Connections (2)

- → Dependency: [[ApplicationManagementWS_v23]]
- ← Dependency: [[{MOD}Process application cancelation notification]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Commodity cancelation
