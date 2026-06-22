---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482208
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 OutgoingPaymentsFile

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

Outgoing payment file header.
It contains information about account from which is outgoing payment sent and a collection of payment orders.

## 🔗 Connections (1)

- → Dependency «use»: [[OutgoingPaymentOrder]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| usedPaymentChannelType | Payment Channel Type |  |
| usedPaymentType | Outgoing Payment Type |  |
| hcBankAccountNumber | bankAccountNumberType |  |
| hcBankBranchCode | string |  |
| hcBankCode | string |  |
| outgoingPaymentOrders | OutgoingPaymentOrder |  |
