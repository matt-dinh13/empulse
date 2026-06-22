---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1"
domain: "Analysis Model"
element_id: 1598977
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ActivateCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1

## 📝 Notes

Activate Card response.

## 🔗 Connections (3)

- ← Dependency: [[CardOriginationWS (Interface 1598938)]]
- → Dependency «use»: [[ActivateCardResultCodeDto (Class 1598976)]]
- → Dependency «use»: [[HardCheckDto (Class 1598975)]]

## 📊 Appears In (1 diagrams)

- Logical: CardOriginationWS.ActivateCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ActivateCardResultCodeDto |  |
| hardChecks | HardCheckDto |  |
