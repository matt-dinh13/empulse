---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1746967
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Outgoing Payment File Generation Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

It is only auxiliary entity to keeping processed outgoing payments at payment orders generating due to improving job performance in case big number of payments processing (1000 and more).
As soon as user confirms chosen outgoing payments to payment orders generating,  these outgoing payments are stored in this entity. Next, the function for payment orders generating (05.230 Process outgoing payments) takes these payments in small chunks and process them.

## 🔗 Connections (2)

- ← Association: [[Outgoing Payment Order]]
- → Association: [[Outgoing Payment]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment Orders
