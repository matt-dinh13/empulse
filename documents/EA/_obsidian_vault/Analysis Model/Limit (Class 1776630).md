---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store"
domain: "Analysis Model"
element_id: 1776630
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Limit

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store

## 📝 Notes

Instance of a single limit.

## 🔗 Connections (2)

- ← Dependency: [[LimitBulk]]
- ← Dependency: [[PartyLimits]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Store API - Limit Controller (Management of customer limits)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acqChannelCodes | string |  |
| amtCreditMax | number |  |
| amtDownPaymentMin | number |  |
| amtInstalmentMax | number |  |
| calculationSource | string |  |
| codeRiskGrade | string |  |
| limitAccuracy | number |  |
| limitBulkId | string |  |
| limitId | string |  |
| limitPilotCode | string |  |
| limitScore | number |  |
| limitScoringProcessSource | string |  |
| limitStatus | string |  |
| limitSubTypeCode | string |  |
| limitTypeCode | string |  |
| limitValidFrom | string |  |
| limitValidTo | string |  |
| partyId | string |  |
