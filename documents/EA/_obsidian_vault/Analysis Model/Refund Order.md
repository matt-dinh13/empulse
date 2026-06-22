---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Logical Data Model"
domain: "Analysis Model"
element_id: 1864792
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Refund Order

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Logical Data Model

## 📝 Notes

An entity used for grouping Refund Items which are disbursed to one recipient

## 🔗 Connections (2)

- → Association: [[Outgoing Payment]]
- ← Aggregation: [[Refund Item]]

## 📊 Appears In (1 diagrams)

- Logical: Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Comment | string |  |
| Time To Delivery From | Time |  |
| Time To Delivery To | Time |  |
| Identification Document Type | string |  |
| Identification document number | Text |  |
| Contact Cell Phone | string |  |
| ClientAddress | Text |  |
| ClientFullName | Text |  |
| Creation Date | Date Time |  |
| Active Flag | boolean |  |
