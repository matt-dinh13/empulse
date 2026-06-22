---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Logical data model"
domain: "Analysis Model"
element_id: 1879566
diagrams: 4
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Contract Status Transition Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Logical data model

## 📝 Notes

This entity keeps information about requests made for contract status change (e.g. request to finish or cancel contract).
This is an abstract class, for particular definitions see the derived classed.

## 🔗 Connections (6)

- ← Generalization: [[Contract Status Transition Request for Pay-off]]
- ← Generalization: [[Contract Status Transition Request for Cancellation]]
- ← Generalization: [[Contract Status Transition Request for Termination]]
- → Dependency: [[Contract Status Transition Request Status Type (Class 1880194)]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]
- → Dependency: [[Contract Status Transition Request Type (Class 1880197)]]

## 📊 Appears In (4 diagrams)

- Logical: Contract cancellation - Logical data model
- Logical: Contract finishing - LDM
- Logical: Contract Management
- Logical: Request for pay-off (REL)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Contract Status Transition Request Type |  |
| Requested by | User |  |
| Request date | dateTime |  |
| Canceled by | User |  |
| Cancellation date | dateTime |  |
| Status | Contract Status Transition Request Status Type |  |
