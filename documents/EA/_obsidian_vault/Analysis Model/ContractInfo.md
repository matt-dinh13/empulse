---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482212
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 ContractInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

This entity contains information about a contract which is paid through the outgoing payment order (i.e. one ContractInfo represents info about OutgoingPayment->Contract for each outgoing payment within the contract.

## 🔗 Connections (6)

- ← Dependency «use»: [[PaymentOrderDetail]]
- → Dependency «use»: [[ClientIdentDocumentType]]
- → Dependency «use»: [[ClientNameType]]
- → Dependency «use»: [[ContractInfoPaymentItem]]
- → Dependency «use»: [[RefundOrderType]]
- → Dependency «use»: [[MoneyType]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

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
