---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure"
domain: "Analysis Model"
element_id: 1589761
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ContractInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure

## 📝 Notes

This entity contains information about a contract which is paid through the outgoing payment order (i.e. one ContractInfo represents info about OutgoingPayment->Contract for each outgoing payment within the contract.

## 🔗 Connections (5)

- ← Dependency: [[PaymentOrderDetail (Class 1589762)]]
- → Dependency: [[ContractInfoPaymentItem (Class 1589764)]]
- → Dependency: [[ClientNameType (Class 1589760)]]
- → Dependency: [[RefundOrderType (Class 1589759)]]
- → Dependency: [[ClientIdentDocumentType (Class 1589758)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paidAmount | MoneyType |  |
| paymentChannelType | Payment Channel Type |  |
| amountPaidByClient | MoneyType |  |
| clientIdentDocuments | ClientIdentDocumentType |  |
| clientName | ClientNameType |  |
| contractID | string |  |
| contractInfoPaymentItem | ContractInfoPaymentItem |  |
| dateOfSigningContract | datetime |  |
| invoiceNumberIdentification | string |  |
| posId | string |  |
| posName | string |  |
| totalGoodsPrice | MoneyType |  |
| refundOrders | RefundOrderType |  |
