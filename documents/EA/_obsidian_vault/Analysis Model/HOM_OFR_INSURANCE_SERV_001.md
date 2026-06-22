---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168393
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFR_INSURANCE_SERV_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Table of adding info about insurance service

## 🔗 Connections (2)

- ← Aggregation: [[HOM_OFR_INSR_CUST_DATA_001]]
- → Aggregation: [[HOM_OFFER_SERVICE_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insurance period days | number |  |
| insurance contract code | string |  |
| insurance program code | string |  |
| insurance program version | number |  |
| sum insured | number |  |
| offer service ID | number |  |
| estimated first period start | date |  |
| estimated first period end | date |  |
