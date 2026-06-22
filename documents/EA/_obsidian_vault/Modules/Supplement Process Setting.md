---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model"
domain: "Modules"
element_id: 1874482
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Supplement Process Setting

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model

## 📝 Notes

It defines some parameters related to the contract supplement status and used within a supplement processing

## 🔗 Connections (2)

- → Association: [[Contract Supplement Status Type (Class 1874467)]]
- → Aggregation: [[Supplement (Class 1874481)]]

## 📊 Appears In (1 diagrams)

- Logical: Supplement definition - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CancelManuallyYN | boolean |  |
| GenerateNotificationYN | boolean |  |
| Duplicity Check Action | string |  |
| CancellationTimeout | int |  |
