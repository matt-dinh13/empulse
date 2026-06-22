---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1746974
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 tariff_item2out_pay

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

Mapping table which decides, what payment channel to create and if outgoing payment will be waiting for external confirmation message based on Tariff Item Type.

## 🔗 Connections (1)

- → Aggregation: [[Outgoing Payment]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Tariff Item Type | string |  |
| Outgoing Payment Type | string |  |
| Channel Purpose | string |  |
| Channel Type | string |  |
| {ADD}Confirmation Needed | boolean |  |
