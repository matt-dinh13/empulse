---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482205
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 OutgoingPaymentOrder

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

It presents one payment order detail with recipient data as well as disbursed amount

Only Payment Orders, where Amount > 0 are generated.

## 🔗 Connections (3)

- ← Dependency «use»: [[OutgoingPaymentsFile]]
- → Dependency «use»: [[PaymentOrderDetail]]
- → Dependency «use»: [[MoneyType]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentOrderID | string |  |
| amount | MoneyType |  |
| country | Country |  |
| paymentOrderDetail | PaymentOrderDetail |  |
| recipientBankAccountName | string |  |
| recipientBankAccountNumber | bankAccountNumberType |  |
| recipientBankAccountType | string |  |
| recipientBankBranchCode | string |  |
| recipientBankCode | string |  |
| recipientReference | string |  |
| externalCardID | string |  |
