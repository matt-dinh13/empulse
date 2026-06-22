---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations"
domain: "Data manipulation support"
element_id: 1377163
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 {MOD}Cancel granted Grace period

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations

## 📝 Notes

Purpose of this UC is to allow cancellation of already granted Grace period, which is not supported by standard functionality of BSL.
Usually used in case the GP was granted after the incorrect payment pairing to the contract.

## 🔗 Connections (1)

- → UseCase «include»: [[{ADD}Move installment schedule to a specific version]]

## 📊 Appears In (1 diagrams)

- Use Case: Installment schedule manipulations
