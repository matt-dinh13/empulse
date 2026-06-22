---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1757676
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Expiration Date of CET - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

current date + ExpirationDateMinLimit <= CET Expiration Date<=current date + ExpirationDateMaxLimit (MSG_COMPARE_LESS_THAN_EQUAL_DATE, MSG_COMPARE_GREATER_THAN_EQUAL_DATE)

ExpirationDateMinLimit, ExpirationDateMaxLimit are parameters of corresponding ContractService.Service.ContractEarlyTerminationService

## 🔗 Connections (1)

- ← Dependency: [[Expiration Date]]
