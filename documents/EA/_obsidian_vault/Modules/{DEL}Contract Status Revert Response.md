---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Responses/v1/Contract Status Revert Response"
domain: "Modules"
element_id: 1838107
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}Contract Status Revert Response

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Responses/v1/Contract Status Revert Response

## 📝 Notes

{DEL CLM-5646}
Notification generated when there is some change on contract.

## 🔗 Connections (2)

- → Dependency: [[Response Result Code (Enumeration 1838104)]]
- → Dependency: [[{DEL}Contract Status Revert Request]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Status Revert Response

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| request | body |  |
| resultMeassage | string |  |
| resultCode | enum |  |
| revertDate | datetime |  |
