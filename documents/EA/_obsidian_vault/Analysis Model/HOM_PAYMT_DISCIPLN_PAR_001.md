---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371193
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PAYMT_DISCIPLN_PAR_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Parameter of payment discipline for services

## 🔗 Connections (1)

- → Aggregation: [[HOM_SERVICE_001]]

## 📊 Appears In (1 diagrams)

- Logical: Service (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service ID | number |  |
| DPD delay tolerance | number |  |
| DPD amount tolerance | number |  |
| DPD amount tolerance currency | string |  |
| DPD scope | string |  |
| last DPD delay tolerance | number |  |
| last DPD amount tolerance | number |  |
| last DPD amount tolerance currency | string |  |
| differ tolerance for last DPD | boolean |  |
