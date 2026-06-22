---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163765
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SetCardLimitsRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

This request sets card limits.

## 🔗 Connections (1)

- ← Dependency «use»: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | PaymentCardId |  |
| limits | LimitDto |  |
