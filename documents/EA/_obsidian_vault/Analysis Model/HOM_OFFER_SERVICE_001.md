---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168388
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFFER_SERVICE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Table keeps data about offer service

## 🔗 Connections (3)

- → Aggregation: [[HOM_OFFER_FIN_PARAMS_001]]
- ← Aggregation: [[HOM_OFR_INSURANCE_SERV_001]]
- ← Aggregation: [[HOM_OFR_FIN_PR_I2S_ITM_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offer financial parameters ID | number |  |
| commodity ID | number |  |
| archived | boolean |  |
| TA commodity ID | number |  |
| service ID | number |  |
| tariff ID | number |  |
