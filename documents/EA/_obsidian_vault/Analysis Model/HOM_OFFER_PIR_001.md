---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168397
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFFER_PIR_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Presented interest rate which was offered to client before contract was created

## 🔗 Connections (2)

- → Aggregation: [[HOM_OFFER_FIN_PARAMS_001]]
- → Dependency: [[HOM_PRESENTED_IR_SETNG_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offer financial parameters ID | number |  |
| PIR setting ID | HOM_PRESENTED_IR_SETNG_001 |  |
| value | number |  |
| archived | boolean |  |
