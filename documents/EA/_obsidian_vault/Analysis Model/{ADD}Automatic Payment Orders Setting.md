---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1746978
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Automatic Payment Orders Setting

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

{ADD PAYM-1016 CBL-2763 /}
It defines for which payments (based on combination of attributes) is allowed automatic outgoing payment order generation.

At least one record is mandatory if AutomaticOutPayOrderEnabled = TRUE

## 🔗 Connections (2)

- → Dependency: [[Transaction Subtype]]
- → Dependency: [[Outgoing Payment Type]]

## 📊 Appears In (1 diagrams)

- Logical: Automatic Outgoing Payment Orders Setting

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Outgoing Payment Type | Outgoing Payment Type |  |
| Contract Created Externally | boolean |  |
| Transaction Subtype | Transaction Subtype |  |
