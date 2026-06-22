---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/COMA API/Business Rules"
domain: "Modules"
element_id: 1854600
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get contract data 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/COMA API/Business Rules

## 📝 Notes

{ADD PCG-5309}
Retrieve data about the contract by REST service call:
/rest/v12/contracts/{contractCode}
- projection: BUSINESS_EVENT_FULL

Role to assign on technical user: COMA_API_RO

Example:
https://coma.in00c1.in.infra/swagger/swagger-ui/index.html

	
- https://coma.in00c1.in.infra/rest/v12/contracts/4500172693?projection=BUSINESS_EVENT_FULL


{/ADD}

## 🔗 Connections (1)

- → Dependency: [[{ADD}Process contract supplement cancelation notification]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: PCG-5309 OPPO - IMEI unblocking API (CBL-28662)
- Use Case: Commodity cancelation
