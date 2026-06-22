---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRule"
domain: "Modules"
element_id: 1746807
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}GetCommodityValidationRuleResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRule

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (5)

- ← Dependency: [[{DEL}CommodityWS]]
- → Dependency: [[{DEL}ResultGetCommodityValidationRule]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[{DEL}ValidationCodeGetCommodityValidationRule]]
- → Dependency: [[{DEL}ResultCodeGetCommodityValidationRule]]

## 📊 Appears In (1 diagrams)

- Logical: GetCommodityValidationRule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityValidationRule | {DEL}ResultGetCommodityValidationRule |  |
| validationResult | ValidationResult |  |
| result | {DEL}ResultCodeGetCommodityValidationRule |  |
