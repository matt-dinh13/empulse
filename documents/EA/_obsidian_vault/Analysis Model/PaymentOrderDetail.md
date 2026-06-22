---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482211
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOrderDetail

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

It presents extended details about payment order as recipient data as well as disbursed contracts

## 🔗 Connections (3)

- → Dependency «use»: [[ContractInfo]]
- → Dependency: [[PaymentOnPosSettlementDto (Class 1482213)]]
- ← Dependency «use»: [[OutgoingPaymentOrder]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractInfo | ContractInfo |  |
| emailForPaymentsControl | string |  |
| paymentOrderId | string |  |
| phoneForPaymentsSMS | string |  |
| posPartnerName | string |  |
| settlements | PaymentOnPosSettlementDto |  |
