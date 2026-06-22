---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store"
domain: "Analysis Model"
element_id: 1776629
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 NewLimitBulk

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store

## 📝 Notes

Instance of a single new limit bulk.

## 🔗 Connections (2)

- → Dependency: [[RequestProcessingStatus]]
- ← Usage: [[Limits]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Store API - Limit Controller (Management of customer limits)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| failureReason | string |  |
| limitBulkId | string |  |
| partyId | string |  |
| status | string |  |
