---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881762
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SYMPHONY validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

Unblocking Process:
The "Unblock Serial Number" API will only be called if the transaction is canceled before signing/Activation.
{
  "responseStatus": -1,
  "responseMessage": "Invalid Serial Number"
}
{
  "responseStatus":  0,
  "responseMessage": "Valid Serial Number"
} 

note: documentation for SYMPHONY integration assigned in CBL-27151 and CBL-26704

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
