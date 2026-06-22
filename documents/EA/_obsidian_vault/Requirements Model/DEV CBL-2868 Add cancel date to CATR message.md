---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-836 (CBL-2868) Add cancel date to CATR message"
domain: "Requirements Model"
element_id: 1332776
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 DEV CBL-2868 Add cancel date to CATR message

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-836 (CBL-2868) Add cancel date to CATR message

## 📝 Notes

We need to add new attribute cancellationDate to CELAccountTransactionDto - it will be filled for CELAccountTransactionRequest and CELAccountTransactionsDisbursedNotification messages only when typeOfOperation = CANCEL.

The new attribute will not be consumed by OBS.

## 🔗 Connections (1)

- → Generalization: [[PAYM-836 (CBL-2868) Add cancel date to CATR message (Requirement 1332777)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-836 (CBL-2868) Add cancel date to CATR message
