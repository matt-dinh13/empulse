---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-589 (CBL-5864) Generate IS only once a customer picks up goods/Goods received"
domain: "Requirements Model"
element_id: 1513497
diagrams: 1
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 GoodsReceivedMessage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-589 (CBL-5864) Generate IS only once a customer picks up goods/Goods received

## 📝 Notes

{ADD IS-589 CBL-5864 /}
Info that goods were received by client. If Contract->Product->InstallmentScheduleGenerationTrigger
= 'GOODS_RECEIVED' than receiving of this JMS generates GoodsReceivedSE and triggers generating of installment schedule.

## 📊 Appears In (1 diagrams)

- Logical: Goods received

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| goodsReceivedDate | date |  |
