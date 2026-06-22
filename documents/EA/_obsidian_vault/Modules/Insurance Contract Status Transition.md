---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM"
domain: "Modules"
element_id: 1700877
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 Insurance Contract Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM

## 📝 Notes

Transition of insurance contract between statuses.

## 🔗 Connections (6)

- → Dependency: [[Insurance Contract Status]]
- → Association: [[Insurance Contract Status Transition]]
- ← Association: [[Insurance Contract Status Transition]]
- → Aggregation: [[Insurance Contract (Class 1700872)]]
- → Dependency: [[Insurance Business Reason Type]]
- → Dependency: [[Insurance Contract Status Reason]]

## 📊 Appears In (1 diagrams)

- Logical: Changes in LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Creation Date | DateTime |  |
| Status | Insurance Contract Status |  |
| Status Reason | Insurance Contract Status Reason |  |
| Status Reason Text | Text |  |
| Business Reason | Insurance Business Reason Type |  |
