---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Use Case"
domain: "Analysis Model"
element_id: 1879456
diagrams: 3
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}03.091 Remove installment by external system

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Use Case

## 📝 Notes

This technical, non-visual use case is used to remove installment from installment schedule based on request from an external system.

Following rules for removal of installments initiated by external system apply:
- It's possible to remove only installments with installment typ = 'Extraordinary'
- It's possible to remove only those installments which are based on tariff item which is flagged as "can be canceled manually" in BSL.

## 🔗 Connections (6)

- ← UseCase «include»: [[{MOD}04.130 Cancel fees]]
- → UseCase «include»: [[04.150 Charge Penalty Registered Over Limit (UseCase 1836318)]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Realisation: [[Requirement3 - TransWS - add reason of (un)charge fee]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → Realisation: [[03.091 Remove installment by external system]]

## 📊 Appears In (3 diagrams)

- Use Case: Charging Penalty Over Limit
- Use Case: Fee services used by external system (Collection)
- Use Case: OVERVIEW - Installment Schedule
