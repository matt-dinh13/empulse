---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1879049
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Commodity type criterion check

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Checking of commodity type criteria based on calling the respective REST API provided by the Commodity module (i.e. GET Commodity-Type_criteria) with following input parameters:
        - codes = CommodityTypeCode
Input
Set of commodity types (commodity type, price)

Steps:
Commodities has to meet all defined active criteria for product offer to be generated.

For each commodity type from Set of commodity types (commodity type) finds all commodity type criterion

Parent commodity type
If commodityTypeCriterion.criterionType = PARENT_COMMODITY_TYPE is defined, then at least one commodity type must exist in Set of commodity types (commodity type), where Set of commodity types (price) for that commodity type is in range <PARENT_PRICE_MIN; PARENT_PRICE_MAX> (if range is defined)

If commodityTypeCriterion.criterionType = PARENT_PRICE_MIN or/and PARENT_PRICE_MAX are defined, then must exist at least one Set of commodity types (price) for any commodity type in range <PARENT_PRICE_MIN; PARENT_PRICE:MAX>

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Calculate Product Offer - Auxiliary evaluations
