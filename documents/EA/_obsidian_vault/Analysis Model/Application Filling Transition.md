---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/Logical Data Model"
domain: "Analysis Model"
element_id: 1478510
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Application Filling Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/Logical Data Model

## 📝 Notes

Entity for tracing changed of Application Filling Queue

## 🔗 Connections (5)

- → Dependency: [[Application Filling Modification Type]]
- → Dependency: [[Application Filling Group Type]]
- → Dependency: [[Application Filling Status]]
- → Dependency: [[Filling Channel Type]]
- → Aggregation: [[Application Filling Queue]]

## 📊 Appears In (1 diagrams)

- Logical: Application Filling Queue

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Description | Text |  |
| Status | Application Filling Status |  |
| Filling Group | Application Filling Group Type |  |
| Filling Channel | Filling Channel Type |  |
| Modification | Application Filling Modification Type |  |
| Created By | User |  |
| Creation Date | DateTime |  |
