---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}SetCommodityValidationRule"
domain: "Modules"
element_id: 1746800
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}ResultSetCommodityValidationRule

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}SetCommodityValidationRule

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (4)

- ← Dependency: [[{DEL}SetCommodityValidationRuleResponse]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[{DEL}ResultCodeSetCommodityValidationRule]]
- → Dependency: [[{DEL}ValidationCodeSetCommodityValidationRule]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}SetCommodityValidationRule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| validationResult | ValidationResult |  |
| result | {DEL}ResultCodeSetCommodityValidationRule |  |
