---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2"
domain: "Analysis Model"
element_id: 1598998
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ActivateCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2

## 📝 Notes

Activate Card response.

## 🔗 Connections (3)

- → Dependency «use»: [[ActivateCardResultCodeDto (Class 1599033)]]
- → Dependency «use»: [[HardCheckDto (Class 1599007)]]
- ← Dependency «use»: [[CardOriginationWS (Interface 1598985)]]

## 📊 Appears In (1 diagrams)

- Logical: CardOriginationWS.ActivateCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ActivateCardResultCodeDto |  |
| hardChecks | HardCheckDto |  |
