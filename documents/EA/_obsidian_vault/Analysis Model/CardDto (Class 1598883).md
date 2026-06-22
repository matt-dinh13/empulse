---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types"
domain: "Analysis Model"
element_id: 1598883
diagrams: 3
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 CardDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types

## 📝 Notes

Card data transfer object.

## 🔗 Connections (7)

- → Dependency: [[CardTypeDto (Class 1598905)]]
- → Dependency: [[AccountDto (Class 1598901)]]
- ← Generalization «XSDextension»: [[CardDetailDto (Class 1598891)]]
- → Dependency: [[TruncatedPan (Class 1598877)]]
- → Dependency: [[CardStatusDto (Enumeration 1598874)]]
- → Dependency: [[EcommerceStatusDto (Enumeration 1598872)]]
- ← Dependency: [[GetCardsResponse (Class 1598868)]]

## 📊 Appears In (3 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard
- Logical: CardInfoWS.GetCards

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
| ecommerceStatus | EcommerceStatusDto |  |
| validTo | date |  |
