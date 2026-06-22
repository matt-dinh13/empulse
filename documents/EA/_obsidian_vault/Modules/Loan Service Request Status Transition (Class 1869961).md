---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1869961
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Loan Service Request Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Logical Data Model

## 📝 Notes

Logging Service Request lifecycle (statuses transitions)

## 🔗 Connections (2)

- → Dependency: [[Loan Service Request Status Type (Enumeration 1869959)]]
- → Aggregation: [[Loan Service Request (Class 1869956)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation Date | DateTime |  |
| Performed By | User |  |
| Reason | string |  |
| Status | Loan Service Request Status Type |  |
