---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Outgoing payment manipulations"
domain: "Data manipulation support"
element_id: 1675835
diagrams: 1
connections: 0
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 {ADD}Unblock outgoing payment

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Outgoing payment manipulations

## 📝 Notes

{ADD PAYM-551 CBL-691 /}

This mBean changes Blocked flag of an outgoing payment from true to false. An outgoing payment has to be in status Unpaid (U), Order generating (G) or Waiting (W) otherwise it's not possible to unblock it. This can be requested in case that contract status was changed back from Canceled or in case that the salesroom has been closed.

## 📊 Appears In (1 diagrams)

- Use Case: Outgoing payment manipulations
