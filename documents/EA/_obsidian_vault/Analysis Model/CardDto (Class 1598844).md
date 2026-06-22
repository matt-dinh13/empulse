---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types"
domain: "Analysis Model"
element_id: 1598844
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 CardDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types

## 📝 Notes

Card data transfer object.

## 🔗 Connections (6)

- → Dependency: [[EcommerceStatusDto (Enumeration 1598814)]]
- → Dependency: [[TruncatedPan (Class 1598832)]]
- → Dependency: [[CardStatusDto (Enumeration 1598827)]]
- → Dependency: [[AccountDto (Class 1598848)]]
- → Dependency: [[CardTypeDto (Class 1598843)]]
- ← Generalization «XSDextension»: [[CardDetailDto (Class 1598845)]]

## 📊 Appears In (2 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| futureEmbossedName | string |  |
| account | AccountDto |  |
| activeFrom | date |  |
| cardType | CardTypeDto |  |
| holderCuid | long |  |
| pcid | long |  |
| status | CardStatusDto |  |
| truncatedPan | TruncatedPan |  |
| validTo | date |  |
| ecommerceStatus | EcommerceStatusDto |  |
