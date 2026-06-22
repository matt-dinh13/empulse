---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}COMMON for Commodity Validation Setting"
domain: "Modules"
element_id: 1746833
diagrams: 3
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}CommodityValidationRuleValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}COMMON for Commodity Validation Setting

## 📝 Notes

{DEL PCG-3924/}
LDM: CommodityValidationRule

## 🔗 Connections (5)

- ← Dependency: [[{DEL}SetCommodityValidationRule (Class 1746799)]]
- ← Dependency: [[{DEL}ResultGetCommodityValidationRule]]
- → Dependency: [[{MOD}Commodity Validation Type]]
- → Dependency: [[Commodity Validation External Type (Class 1744497)]]
- → Dependency: [[{DEL}CommodityValidationRuleCriterion]]

## 📊 Appears In (3 diagrams)

- Logical: {DEL}CommodityValidationsRulesValues
- Logical: {DEL}SetCommodityValidationRule
- Logical: GetCommodityValidationRule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| validFrom | datetime |  |
| validTo | datetime |  |
| order | integer |  |
| type | string |  |
| externalType | string |  |
| criterion | {DEL}CommodityValidationRuleCriterion |  |
