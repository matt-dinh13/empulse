---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules"
domain: "Modules"
element_id: 1877998
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Get financial parameters data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules

## 📝 Notes

Financial parameters data of contract are retrieved from BSL via REST API call Financial Parameters  with GET request /v2.0/financial-parameters/detail
with parameters
- contractCode = code of contract
-  projection = FULL

note: This endpoint requires a user to have BSL_API_ACCESS role

## 🔗 Connections (2)

- → Dependency: [[Financial Parameters (Interface 1878379)]]
- ← Dependency: [[Process contract cancelation notification]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Commodity cancelation
