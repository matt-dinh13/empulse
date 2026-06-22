---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/JMS messages"
domain: "Modules"
element_id: 1266621
diagrams: 3
connections: 3
tags:
  - enumeration
  - modules
---

# 📝 ReconciliationTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/JMS messages

## 📝 Notes

Reconciliation type

## 🔗 Connections (3)

- ← Dependency «use»: [[PaidInstallmentMessageDto]]
- ← Dependency «use»: [[InstalmentMessageDto]]
- ← Dependency: [[TransactionReconciliationDto (Class 1223771)]]

## 📊 Appears In (3 diagrams)

- Logical: REL Account Transactions - JMS messages
- Logical: REL Installment schedule - JMS messages
- Logical: REL Payment Pairing - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OWN_FUNDS | string |  |
| DEBT | string |  |
| OVERDRAFT | string |  |
