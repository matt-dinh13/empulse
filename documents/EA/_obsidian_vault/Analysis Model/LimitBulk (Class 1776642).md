---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store"
domain: "Analysis Model"
element_id: 1776642
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 LimitBulk

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store

## 📝 Notes

Instance of a single new limit bulk.

## 🔗 Connections (2)

- ← Dependency: [[Limits]]
- → Dependency: [[Limit (Class 1776640)]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Store API - Limit Controller (Management of customer limits)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| calculationSource | string |  |
| flagEligibility | boolean |  |
| limitBulkId | string |  |
| limitScoringProcessSource | string |  |
| limits | Limit |  |
| partyId | string |  |
