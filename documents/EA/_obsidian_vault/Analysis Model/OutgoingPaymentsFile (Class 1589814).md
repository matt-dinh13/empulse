---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 "
domain: "Analysis Model"
element_id: 1589814
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 OutgoingPaymentsFile

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 

## 📝 Notes

Outgoing payment file header.
It contains information about account from which is outgoing payment sent and a collection of payment orders.

## 🔗 Connections (1)

- → Dependency: [[OutgoingPaymentOrder (Class 1589810)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure V2 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| usedPaymentChannelType | Payment Channel Type |  |
| usedPaymentType | Outgoing Payment Type |  |
| hcBankAccountNumber | bankAccountNumberType |  |
| hcBankBranchCode | string |  |
| hcBankCode | string |  |
| outgoingPaymentOrders | OutgoingPaymentOrder |  |
