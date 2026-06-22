---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/Insurance Program LDM modification"
domain: "Modules"
element_id: 1877909
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 Eligible Commodity Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/Insurance Program LDM modification

## 📝 Notes

A list of commodities eligible to be insured

## 🔗 Connections (2)

- → Aggregation: [[Insurance Eligibility Criteria (Class 1591203)]]
- → Aggregation: [[Insurance Eligibility Criteria (Class 1877915)]]

## 📊 Appears In (2 diagrams)

- Logical: Insurance Program LDM modification
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity Type Code | string |  |
| Archived | boolean |  |
| Max Days After Activation | int |  |
| Minimal Price | Financial Amount |  |
| CommodityCategoryCode | string |  |
| CommodityCategoryName | string |  |
| CommodityTypeName | string |  |
