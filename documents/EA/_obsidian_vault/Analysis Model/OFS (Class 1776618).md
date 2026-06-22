---
type: Class
stereotype: "Resource provider"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store"
domain: "Analysis Model"
element_id: 1776618
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 OFS

> **Type**: Class · **Stereotype**: «Resource provider»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store

## 📝 Notes

https://ofs.{environment}/ofs

REST API provided by Offer Store system - for example of individual requests/responses, see https://ofs.{environment}/ofs/swagger-ui.html

## 🔗 Connections (2)

- ← Aggregation «Path»: [[{ADD}Offers]]
- ← Aggregation «Path»: [[Limits]]

## 📊 Appears In (3 diagrams)

- Logical: Offer Store API
- Logical: Offer Store API - Limit Controller (Management of customer limits)
- Logical: Offer Store API - Offer Controller (Management of customer offers)
