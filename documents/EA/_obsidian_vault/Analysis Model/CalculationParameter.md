---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Goods And Services Taxes/GstWS"
domain: "Analysis Model"
element_id: 1819666
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CalculationParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Goods And Services Taxes/GstWS

## 🔗 Connections (4)

- ← Dependency: [[CalculateGstRequest]]
- → Dependency: [[Region (Enumeration 1819672)]]
- → Dependency: [[Region (Enumeration 1819672)]]
- → Dependency: [[{MOD}ServiceItem]]

## 📊 Appears In (1 diagrams)

- Logical: IN: Goods And Services Taxes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| idRequest | string |  |
| {MOD}posRegion | Region |  |
| clientRegion | Region |  |
| serviceItems | {MOD}ServiceItem |  |
