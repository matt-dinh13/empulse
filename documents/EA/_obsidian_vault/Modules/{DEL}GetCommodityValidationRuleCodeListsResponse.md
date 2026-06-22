---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRuleCodeLists"
domain: "Modules"
element_id: 1746817
diagrams: 1
connections: 8
tags:
  - class
  - modules
---

# 🔷 {DEL}GetCommodityValidationRuleCodeListsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRuleCodeLists

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (8)

- ← Dependency: [[{DEL}CommodityWS]]
- → Dependency: [[{DEL}CommodityCategory]]
- → Dependency: [[{DEL}CommodityType (Class 1746820)]]
- → Dependency: [[{DEL}CommodityValidationEventType]]
- → Dependency: [[{DEL}ErrorCodeGetCommodityValidationRuleCodeLists]]
- → Dependency: [[{DEL}CommodityValidationRuleCriterionType]]
- → Dependency: [[{DEL}CommodityValidationExternalType]]
- → Dependency: [[{DEL}CommodityValidationRuleType]]

## 📊 Appears In (1 diagrams)

- Logical: GetCommodityValidationRuleCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityValidationRuleCriterionType | {DEL}CommodityValidationRuleCriterionType |  |
| type | {DEL}CommodityValidationRuleType |  |
| externalType | {DEL}CommodityValidationExternalType |  |
| commodityValidationEventType | {DEL}CommodityValidationEventType |  |
| commodityType | {DEL}CommodityType |  |
| commodityCategory | CommodityCategory |  |
| errorCode | {DEL}ErrorCodeGetCommodityValidationRuleCodeLists |  |
