---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Use Case Model"
domain: "Modules"
element_id: 1877243
diagrams: 1
connections: 1
tags:
  - usecase
  - modules
---

# 🎯 Process refund notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Use Case Model

## 📝 Notes

{ADD PAYM-4601 PAYM-4602}
This technical use case described how notification about Refunds are processed.

The purpose of this use case is to cancel respective incoming payments for which refunds was successfully processed. The conditions for 'successful processing' may differ on basis of refund type - e.g. BANK_INCOME might be considered successful without the necessity of waiting for DELIVERED status (because BANK_INCOME refunds are not physically disbursed).

## 🔗 Connections (1)

- ← UseCase: [[System (Actor 1877517)]]

## 📊 Appears In (1 diagrams)

- Use Case: Refund processing
