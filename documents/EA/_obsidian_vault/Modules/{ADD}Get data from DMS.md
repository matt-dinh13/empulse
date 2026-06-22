---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881758
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get data from DMS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5649/}
For country: IN
Get data from DMS local application, needed for calling external systems

Input:
- salesroom
- manufacturer
- externalType

Output:
- dealer
- agent

System calls local app to get data from DMS external system:

endpoint: https://dms.prod.homecredit.in/dmsServer/external_codes/{manufacturer}/pos/{salesroom}/{externalType} with parameters
salesroom = salesroom code
manufacturer = manufacturer code
externaalType = external Type
From response in format dealer@agent system gets dealer and agent.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}ALCATEL validation cancellation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5649 BRIN-1163 - ALCATEL - API Integration
