---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service"
domain: "Modules"
element_id: 1081459
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Service Fee Items

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service

## 📝 Notes

The structure keeps array of fees which are to be charged for service.
Each fee defined as Tariff Item (where TariffItemType.Usage = usage defined on input of calculation, which corresponds with processed service type, e.g. PR for partial early repayment) in valid Tariff is calculated separately and stored in the Fee Item structure.

## 🔗 Connections (2)

- → Aggregation: [[CalculationInfo]]
- ← Aggregation: [[Fee Item]]

## 📊 Appears In (1 diagrams)

- Logical: Process service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Sum of Fees | Financial Amount |  |
