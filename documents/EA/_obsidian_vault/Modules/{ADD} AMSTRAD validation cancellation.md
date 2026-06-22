---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881764
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD} AMSTRAD validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5811/}
For country: IN

System calls external system for validation cancellation with data from commodity.
endpoint: POST  https://crm.ovot.in/verifyserial
Request body parameters:
"materialCode": commodity.SKU
"serialNumber": commodity.serialNumber,
"accessKey": "Test1234567898765432123456789876", (this accessKey is for testing purpose, key for prod will be provided after testing)
"requesttype": "unblock"

note: documentation for AMSTRAD integration assigned in BRIN-1261

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5811 CBL-31890 BRIN-1261 - AMSTRAD - API Integration
