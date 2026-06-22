---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Goods And Services Taxes/GstWS"
domain: "Analysis Model"
element_id: 1819667
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Calculation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Goods And Services Taxes/GstWS

## 🔗 Connections (4)

- → Dependency: [[Item (Class 1819668)]]
- → Dependency: [[TaxOffice]]
- → Dependency: [[TaxOffice]]
- ← Dependency: [[CalculateGstResponse]]

## 📊 Appears In (1 diagrams)

- Logical: IN: Goods And Services Taxes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| idRequest | string |  |
| posTaxOffice | TaxOffice |  |
| clientTaxOffice | TaxOffice |  |
| taxItems | Item |  |
