---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1"
domain: "Analysis Model"
element_id: 1598853
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PlasticDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1

## 🔗 Connections (2)

- ← Dependency «use»: [[GetPlasticsOfCardResponse (Class 1598855)]]
- → Dependency «use»: [[PlasticStatusDto (Enumeration 1598854)]]

## 📊 Appears In (1 diagrams)

- Logical: CardInfoWS.GetPlasticsOfCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| embossedName | string |  |
| validTo | date |  |
| renewalDate | date |  |
| pickupDate | date |  |
| status | PlasticStatusDto |  |
