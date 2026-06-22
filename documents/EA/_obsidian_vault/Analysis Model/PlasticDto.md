---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types"
domain: "Analysis Model"
element_id: 1481403
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PlasticDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types

## 🔗 Connections (2)

- → Dependency: [[PlasticStatusDto]]
- ← Dependency: [[CardDetailDto]]

## 📊 Appears In (1 diagrams)

- Logical: Card management - Card structures - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validTo | date |  |
| renewalDate | date |  |
| pickupDate | date |  |
| status | PlasticStatusDto |  |
