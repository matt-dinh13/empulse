---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Consumed/RabbitMQ/Account Management/v2.0/ProcessAccountClosureResult"
domain: "Modules"
element_id: 1801772
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 AccountClosureResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Consumed/RabbitMQ/Account Management/v2.0/ProcessAccountClosureResult

## 📝 Notes

Result of account closure

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Process account closure]]
- → Dependency: [[Money (Class 1802342)]]
- → Dependency: [[AccountClosureResult (Enumeration 1802341)]]

## 📊 Appears In (1 diagrams)

- Logical: ProcessAccountClosureResult

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | long |  |
| resultType | AccountClosureResultType |  |
| overpayment | Money |  |
| reasonCode | string |  |
| writeoffDate | date |  |
| payoffDate | date |  |
