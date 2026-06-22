---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1850240
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Loan Service Request Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Logical Data Model

## 📝 Notes

Logging Service Request lifecycle (statuses transitions)

## 🔗 Connections (2)

- → Aggregation: [[Loan Service Request (Class 1850239)]]
- → Dependency: [[Loan Service Request Status Type]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation Date | DateTime |  |
| Performed By | User |  |
| Reason | string |  |
| Status | Loan Service Request Status Type |  |
