---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types"
domain: "Analysis Model"
element_id: 1481405
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CardDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types

## 📝 Notes

Card data transfer object.

## 🔗 Connections (4)

- → Dependency: [[Card_ AccountDto]]
- ← Generalization «XSDextension»: [[CardDetailDto]]
- → Dependency «use»: [[CardStatusDto]]
- → Dependency: [[CardTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Card management - Card structures - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | Card: AccountDto |  |
| activeFrom | date |  |
| cardType | CardTypeDto |  |
| embossName | string |  |
| holderCuid | Cuid |  |
| holderName | HolderName |  |
| pcid | PaymentCardId |  |
| status | CardStatusDto |  |
| truncatedPan | TruncatedPan |  |
| validTo | date |  |
| {ADD}ecommerceStatus | EcommerceStatusDto |  |
