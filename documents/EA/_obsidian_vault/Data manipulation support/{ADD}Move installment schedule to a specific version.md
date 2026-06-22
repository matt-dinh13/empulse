---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations"
domain: "Data manipulation support"
element_id: 1377166
diagrams: 1
connections: 10
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 {ADD}Move installment schedule to a specific version

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations

## 📝 Notes

{ADD PAYM-551 CBL-691 /}

This mBean reverts installment schedule of a contract to a historical version specified in the input. It is mostly used in case of a technical problem on an installment schedule (e.g. incompatible change of installments, problematic service application, insurance termination/cancellation etc.).

## 🔗 Connections (10)

- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- ← UseCase «include»: [[{ADD}Cancel granted Cooling-off period]]
- → Dependency: [[{ADD}Create a copy of financial parameters and related structures]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- ← UseCase «include»: [[{MOD}Cancel granted Gift Payment]]
- → Dependency: [[{ADD}Create a copy of a specific version of installment schedule]]
- ← UseCase «include»: [[{ADD}Cancel granted Contract early termination]]
- ← UseCase «include»: [[{MOD}Cancel granted PER]]
- ← UseCase «include»: [[{MOD}Cancel granted Grace period]]
- ← UseCase «include»: [[{MOD}Cancel granted FER]]

## 📊 Appears In (1 diagrams)

- Use Case: Installment schedule manipulations
