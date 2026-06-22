---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure"
domain: "Analysis Model"
element_id: 1589763
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOnPosSettlementDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure

## 📝 Notes

HO_GENERAL_TYPES.xsd

## 🔗 Connections (1)

- ← Dependency: [[PaymentOrderDetail (Class 1589762)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentDataExchangeID | string |  |
| transactionNumber | string |  |
| amount | MoneyDto |  |
| clientsName | string |  |
| contractCode | string |  |
| collectedWhen | dateTime |  |
| collectedByPosCode | string |  |
| collectedByPosName | string |  |
