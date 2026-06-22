---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model"
domain: "Analysis Model"
element_id: 1852793
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Insurance Operation Status

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model

## 📝 Notes

It records changes of operation statuses of the Insurance Contract (i.e. Switch on/ switch off the insurance)

## 🔗 Connections (2)

- → Aggregation: [[Insurance Contract (Class 1852795)]]
- → Dependency: [[Insurance Operation Status Type (Enumeration 1852786)]]

## 📊 Appears In (2 diagrams)

- Logical: Insurance Contract
- Logical: Insurance domain changes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Status | Insurance Operation Status Type |  |
| Creation Date | DateTime |  |
| Reason Code | string |  |
| Request Id | string |  |
| Reason Notice | string |  |
