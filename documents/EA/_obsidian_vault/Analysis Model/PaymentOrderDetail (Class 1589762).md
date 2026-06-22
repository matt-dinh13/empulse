---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure"
domain: "Analysis Model"
element_id: 1589762
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOrderDetail

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure

## 📝 Notes

It presents extended details about payment order as recipient data as well as disbursed contracts

## 🔗 Connections (3)

- ← Dependency: [[OutgoingPaymentOrder (Class 1589756)]]
- → Dependency: [[PaymentOnPosSettlementDto (Class 1589763)]]
- → Dependency: [[ContractInfo (Class 1589761)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractInfo | ContractInfo |  |
| emailForPaymentsControl | string |  |
| paymentOrderId | string |  |
| phoneForPaymentsSMS | string |  |
| posPartnerName | string |  |
| settlements | PaymentOnPosSettlementDto |  |
