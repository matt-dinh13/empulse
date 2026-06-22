---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/SeizureWS/Types"
domain: "Analysis Model"
element_id: 978452
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 TransactionInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/SeizureWS/Types

## 📝 Notes

Suspended transaction detail.

## 📊 Appears In (1 diagrams)

- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceEventId | hs:TransactionSourceIdDto |  |
| code | acc:AccountItemCodeType |  |
| tariffItemTypeCode | acc:TariffItemTypeCodeType |  |
| billingDate | date |  |
| direction | acc:TransactionDirectionDto |  |
| amount | hs:PositiveMoneyDto |  |
| cancelled | boolean |  |
