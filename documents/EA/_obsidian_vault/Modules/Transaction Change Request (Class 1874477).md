---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model"
domain: "Modules"
element_id: 1874477
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Transaction Change Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model

## 📝 Notes

An entity for storage of change requests for the processed Transaction Supplements

## 🔗 Connections (2)

- → Association: [[Account Transaction (Class 1874472)]]
- → Aggregation: [[Account Transaction Supplement (Class 1874469)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Reason Code | string |  |
| Refunded Amount | MoneyType |  |
| Customer Cancellation Date | date |  |
| Partner Change Request Id | string |  |
| Processing Status | string |  |
| Reason Description | string |  |
