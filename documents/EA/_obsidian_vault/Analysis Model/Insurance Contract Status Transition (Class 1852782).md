---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model"
domain: "Analysis Model"
element_id: 1852782
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Insurance Contract Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model

## 📝 Notes

Transition of insurance contract between statuses.

## 🔗 Connections (6)

- → Aggregation: [[Insurance Contract (Class 1852795)]]
- → Dependency: [[Insurance Contract Status Reason (Class 1852789)]]
- → Association: [[Insurance Contract Status Transition (Class 1852782)]]
- ← Association: [[Insurance Contract Status Transition (Class 1852782)]]
- → Dependency: [[Insurance Contract Status (Class 1852791)]]
- → Dependency: [[Insurance Business Reason Type (Class 1852784)]]

## 📊 Appears In (2 diagrams)

- Logical: Insurance Contract
- Logical: Insurance domain changes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Creation Date | DateTime |  |
| Status | Insurance Contract Status |  |
| Status Reason | Insurance Contract Status Reason |  |
| Status Reason Text | Text |  |
| Business Reason | Insurance Business Reason Type |  |
