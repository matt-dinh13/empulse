---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model"
domain: "Modules"
element_id: 1873949
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Contract Status Transition Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model

## 📝 Notes

This entity keeps information about requests made for contract status change (e.g. request to finish or cancel contract).
This is an abstract class, for particular definitions see the derived classed.

## 🔗 Connections (3)

- → Aggregation: [[Contract (Class 1873952)]]
- → Usage: [[Contract Status Transition Request Type]]
- → Usage: [[Contract Status Transition Request Status Type]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Contract Status Transition Request Type |  |
| Requested by | User |  |
| Request date | dateTime |  |
| Canceled by | User |  |
| Cancellation date | dateTime |  |
| Status | Contract Status Transition Request Status Type |  |
