---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types"
domain: "Analysis Model"
element_id: 1598890
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PlasticDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types

## 🔗 Connections (3)

- → Dependency «use»: [[PlasticStatusDto (Enumeration 1598910)]]
- ← Dependency: [[CardDetailDto (Class 1598891)]]
- ← Dependency «use»: [[GetPlasticsOfCardResponse (Class 1598869)]]

## 📊 Appears In (3 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard
- Logical: CardInfoWS.GetPlasticsOfCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validTo | date |  |
| embossedName | string |  |
| renewalDate | date |  |
| pickupDate | date |  |
| status | PlasticStatusDto |  |
