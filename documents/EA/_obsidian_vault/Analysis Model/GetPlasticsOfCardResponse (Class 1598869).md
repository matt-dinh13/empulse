---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2"
domain: "Analysis Model"
element_id: 1598869
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 GetPlasticsOfCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2

## 🔗 Connections (5)

- → Dependency «use»: [[GetPlasticsOfCardResultCodeDto (Enumeration 1598900)]]
- → Dependency: [[GetPlasticsOfCardResultCodeDto (Enumeration 1598902)]]
- → Dependency «use»: [[PlasticDto (Class 1598888)]]
- → Dependency «use»: [[PlasticDto (Class 1598890)]]
- ← Dependency «use»: [[CardInfoWS (Interface 1598863)]]

## 📊 Appears In (1 diagrams)

- Logical: CardInfoWS.GetPlasticsOfCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| plastics | PlasticDto |  |
| resultCode | GetPlasticsOfCardResultCodeDto |  |
