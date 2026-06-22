---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided Data Sources/HO_PAYMENT_ON_POS_DATA"
domain: "Modules"
element_id: 1032032
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 PaymentOnPosSettlementDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided Data Sources/HO_PAYMENT_ON_POS_DATA

## 📝 Notes

{ADD PBR-1266 /}
HO_GENERAL_TYPES.xsd

## 🔗 Connections (1)

- ← Dependency: [[PaymentOnPosData (Class 1032031)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_PAYMENT_ON_POS_DATA data source for print

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
