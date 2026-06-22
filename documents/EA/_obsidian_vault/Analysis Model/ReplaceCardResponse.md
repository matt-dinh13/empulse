---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163805
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ReplaceCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 🔗 Connections (3)

- → Usage: [[HardCheckDto]]
- → Dependency: [[ReplaceCardResultCodeDto]]
- ← Dependency «use»: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| newPcid | PaymentCardId |  |
| hardChecks | HardCheckDto |  |
| truncatedPan | TruncatedPan |  |
| resultCode | ReplaceCardResultCodeDto |  |
