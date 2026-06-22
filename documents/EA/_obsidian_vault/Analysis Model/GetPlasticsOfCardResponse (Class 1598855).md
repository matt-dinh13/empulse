---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1"
domain: "Analysis Model"
element_id: 1598855
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 GetPlasticsOfCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1

## 🔗 Connections (5)

- ← Dependency: [[CardInfoWS (Interface 1598819)]]
- → Dependency «use»: [[GetPlasticsOfCardResultCodeDto (Enumeration 1598852)]]
- → Dependency «use»: [[PlasticDto (Class 1598853)]]
- → Dependency: [[GetPlasticsOfCardResultCodeDto (Enumeration 1601399)]]
- → Dependency «use»: [[PlasticDto (Class 1598830)]]

## 📊 Appears In (1 diagrams)

- Logical: CardInfoWS.GetPlasticsOfCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| plastics | PlasticDto |  |
| resultCode | GetPlasticsOfCardResultCodeDto |  |
