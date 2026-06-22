---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 "
domain: "Analysis Model"
element_id: 1589811
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOrderDetail

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 

## 📝 Notes

It presents extended details about payment order as recipient data as well as disbursed contracts

## 🔗 Connections (3)

- → Dependency: [[ContractInfo (Class 1589813)]]
- ← Dependency: [[OutgoingPaymentOrder (Class 1589810)]]
- → Dependency: [[PaymentOnPosSettlementDto (Class 1589809)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure V2 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractInfo | ContractInfo |  |
| emailForPaymentsControl | string |  |
| phoneForPaymentsSMS | string |  |
| posPartnerName | string |  |
