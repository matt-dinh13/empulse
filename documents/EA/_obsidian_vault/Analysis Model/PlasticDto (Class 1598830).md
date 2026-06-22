---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types"
domain: "Analysis Model"
element_id: 1598830
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PlasticDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types

## 🔗 Connections (3)

- ← Dependency «use»: [[GetPlasticsOfCardResponse (Class 1598855)]]
- → Dependency «use»: [[PlasticStatusDto (Enumeration 1598825)]]
- ← Dependency: [[CardDetailDto (Class 1598845)]]

## 📊 Appears In (3 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard
- Logical: CardInfoWS.GetPlasticsOfCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| embossedName | string |  |
| validTo | date |  |
| renewalDate | date |  |
| pickupDate | date |  |
| status | PlasticStatusDto |  |
