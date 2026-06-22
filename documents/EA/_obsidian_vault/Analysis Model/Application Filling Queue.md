---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/Logical Data Model"
domain: "Analysis Model"
element_id: 1478508
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Application Filling Queue

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/Logical Data Model

## 📝 Notes

Queue for filling 2BoD of AF

## 🔗 Connections (6)

- → Dependency: [[Application Filling Status]]
- → Dependency: [[Preferred Contact Mode Type]]
- → Dependency: [[Application Filling Group Type]]
- → Dependency: [[Filling Channel Type]]
- ← Aggregation: [[Application Filling Transition]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (1 diagrams)

- Logical: Application Filling Queue

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Assigned To | User |  |
| Description | Text |  |
| Status | Application Filling Status |  |
| Filling Group | Filling group type |  |
| Filling Channel | Filling Channel Type |  |
| Contact Mode | Preferred Contact Mode Type |  |
| Contact Date And Time | DateTime |  |
| Created By | User |  |
| Creation Date | DateTime |  |
| Updated By | User |  |
| Update Date | DateTime |  |
