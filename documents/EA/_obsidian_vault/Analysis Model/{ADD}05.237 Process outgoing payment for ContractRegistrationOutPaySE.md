---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process internal system events and notifications for outgoing payments/UseCase model"
domain: "Analysis Model"
element_id: 1683317
diagrams: 1
connections: 2
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.237 Process outgoing payment for ContractRegistrationOutPaySE

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process internal system events and notifications for outgoing payments/UseCase model

## 📝 Notes

This technical use case describes processing of ContractRegistrationOutPaySE within outgoing payments module.
Currently, it changes status of outgoing payment from "waiting" to "unpaid" for contracts where a payment in such a status exists and related salesroom has moment of payment "on contract completion"

## 🔗 Connections (2)

- → Association: [[System event]]
- → UseCase «include»: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (1 diagrams)

- Use Case: Process internal system events and notifications for outgoing payments
