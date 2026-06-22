---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE"
domain: "Analysis Model"
element_id: 1482213
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOnPosSettlementDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE

## 📝 Notes

HO_GENERAL_TYPES.xsd

## 🔗 Connections (4)

- ← Dependency: [[PaymentOrderType]]
- ← Dependency: [[PaymentOnPosData]]
- ← Dependency: [[PaymentOrderDetail]]
- ← Dependency: [[{MOD}DocumentData (Class 1626465)]]

## 📊 Appears In (4 diagrams)

- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout
- Logical: HO_PAYMENT_ON_POS_DATA data source for print
- Logical: HO_PAYMENT_ORDER_FILE data source for printout
- Logical: Outgoing Payment File Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentDataExchangeID | string |  |
| transactionNumber | string |  |
| amount | MoneyDto |  |
| contractCode | string |  |
| clientsName | string |  |
| collectedWhen | dateTime |  |
| collectedByPosCode | string |  |
| collectedByPosName | string |  |
