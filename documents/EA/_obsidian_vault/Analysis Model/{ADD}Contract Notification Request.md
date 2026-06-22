---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Logical data model"
domain: "Analysis Model"
element_id: 1285505
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Contract Notification Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Logical data model

## 📝 Notes

{ADD CLM-1338 /}
An entity for keeping requests for contract notification resending

## 🔗 Connections (4)

- → Association: [[Data Processed Batch]]
- → Dependency: [[Processing Status Type]]
- ← Aggregation: [[{ADD}Contract To Notification]]
- → Dependency: [[External System (Enumeration 1285503)]]

## 📊 Appears In (1 diagrams)

- Logical: Processing Contract notification resending request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Request Type | string |  |
| Batch Processing Result | string |  |
| Request Id | string |  |
| System Id | string |  |
