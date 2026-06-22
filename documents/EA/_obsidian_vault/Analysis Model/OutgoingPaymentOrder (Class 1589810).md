---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 "
domain: "Analysis Model"
element_id: 1589810
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 OutgoingPaymentOrder

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 

## 📝 Notes

It presents one payment order detail with recipient data as well as disbursed amount

Only Payment Orders, where Amount > 0 are generated.

## 🔗 Connections (2)

- ← Dependency: [[OutgoingPaymentsFile (Class 1589814)]]
- → Dependency: [[PaymentOrderDetail (Class 1589811)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure V2 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentOrderID | string |  |
| amount | MoneyType |  |
| paymentOrderDetail | PaymentOrderDetail |  |
| recipientBankAccountName | string |  |
| recipientBankAccountNumber | bankAccountNumberType |  |
| recipientBankAccountType | string |  |
| recipientBankBranchCode | string |  |
| recipientBankCode | string |  |
| recipientReference | string |  |
| externalCardID | string |  |
| orderCreationDate | date |  |
