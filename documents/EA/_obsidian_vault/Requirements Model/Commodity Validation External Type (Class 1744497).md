---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/IN/PCG-5617 BRIN-1016 - DISH TV - API Integration for Serial Number"
domain: "Requirements Model"
element_id: 1744497
diagrams: 7
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 Commodity Validation External Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/IN/PCG-5617 BRIN-1016 - DISH TV - API Integration for Serial Number

## 📝 Notes

Only for rule Type = EXTERNAL.
Type of algorithm used for validation processed by external vendor (e.g. SAM, etc.)

## 🔗 Connections (5)

- ← Dependency: [[ValidationRule]]
- ← Dependency: [[Commodity Validation Rule]]
- ← Dependency: [[{DEL}CommodityValidationExternalType]]
- ← Dependency: [[{DEL}CommodityValidationRuleValues]]
- ← Dependency: [[{DEL}CommodityValidationRuleValues - validation rules]]

## 📊 Appears In (7 diagrams)

- Custom: PCG-5617 BRIN-1016 - DISH TV - API Integration for Serial Number
- Custom: PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration
- Custom: PCG-5811 CBL-31890 BRIN-1261 - AMSTRAD - API Integration
- Logical: {DEL}CommodityValidationsRulesValues
- Logical: Commodity Validation Rules
- Logical: GetCommodityValidationRuleCodeLists
- Logical: Validation Rule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | boolean | true |
