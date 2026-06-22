---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168387
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFFER_PREFERENCES_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Set of input parameters for product calculator

## 🔗 Connections (1)

- → Aggregation: [[HOM_OFFER_FIN_PARAMS_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| archived | boolean |  |
| offer ID | number |  |
| product type | string |  |
| product code | string |  |
| same product | boolean |  |
| minimal installment | number |  |
| cash payment max | number |  |
| cash payment min | number |  |
| credit amount max | number |  |
| credit amount max orig | number |  |
| credit amount min | number |  |
| EIR max | number |  |
| EIR min | number |  |
| gift payment disallowed | boolean |  |
| grace period disallowed | number |  |
| insurance type 1 | string |  |
| insurance type 2 | string |  |
| offer valid to | date |  |
| term max | number |  |
| term min | number |  |
| sort attribute 1 | string |  |
| sort order 1 | number |  |
| sort attribute 2 | string |  |
| sort order 2 | number |  |
| offers number | number |  |
