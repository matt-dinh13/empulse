---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Goods And Services Taxes/GstWS"
domain: "Analysis Model"
element_id: 1819668
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Item

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Goods And Services Taxes/GstWS

## 🔗 Connections (2)

- → Dependency: [[CalculatedTax]]
- ← Dependency: [[Calculation (Class 1819667)]]

## 📊 Appears In (1 diagrams)

- Logical: IN: Goods And Services Taxes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| idItem | string |  |
| taxItems | CalculatedTax |  |
| serviceCode | string |  |
| description | string |  |
