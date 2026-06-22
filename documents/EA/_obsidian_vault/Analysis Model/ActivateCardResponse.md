---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163771
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ActivateCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

Activate Card response.

## 🔗 Connections (3)

- → Usage: [[ActivateCardResultCodeDto]]
- → Usage: [[HardCheckDto]]
- ← Dependency «use»: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ActivateCardResultCodeDto |  |
| hardChecks | HardCheckDto |  |
