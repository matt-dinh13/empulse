---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/_Interface/Mapping to external systems/LAP"
domain: "Analysis Model"
element_id: 1758904
diagrams: 20
connections: 24
tags:
  - class
  - analysis-model
---

# 🔷 Commodity Type

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Mapping to external systems/LAP

## 📝 Notes

Group of goods of the same type (mobile devices, two-wheelers, etc.)

## 🔗 Connections (24)

- ← Dependency: [[{MOD}Product Offer Limit]]
- ← Dependency: [[CommodityType]]
- ← Dependency: [[{MOD}CalculateSubventionTransaction]]
- ← Dependency: [[Product Offer Request Commodity]]
- ← Association: [[Salesroom Commodity Type]]
- ← Dependency: [[{MOD}FinancingPackageSubvention]]
- ← Dependency: [[Available commodities]]
- ← Dependency: [[Comodity type (GUIElement 1722012)]]
- ← Dependency: [[Commodity type (GUIElement 1734257)]]
- ← Dependency: [[{DEL}CommodityType (Class 1746820)]]
- → Association: [[Commodity Category (Class 1758909)]]
- ← Aggregation: [[Commodity Type Flag]]
- ← Aggregation: [[Commodity field settings]]
- ← Aggregation: [[Commodity Type Criterion]]
- ← Dependency: [[{DEL}CommodityType (Class 1816568)]]
- ← Dependency: [[{MOD}FinancingPackageValues - validation rules]]
- ← Dependency: [[{DEL}CommodityValidationRuleValues - validation rules]]
- ← Dependency: [[{MOD}Subvention (Class 1858806)]]
- ← Dependency: [[Financing Package Subvention]]
- ← Dependency: [[{MOD}Financing Package Criterion Type]]
- ← Dependency: [[{MOD}Financing package - validation]]
- ← Association: [[Commodity type to predictor]]
- ← Association: [[{MOD}Commodity (Class 1879036)]]
- ← Association: [[Product To Commodity Type]]

## 📊 Appears In (20 diagrams)

- Custom: Commodity Hard Check Predictor
- Custom: Financing Package Values - validation rules
- Custom: Validation Rules
- Logical: {DEL}CommodityValidationsRulesValues
- Logical: CalculateSubvention
- Logical: Commodity Data
- Logical: Commodity Data from Manufacturer
- Logical: Commodity Types and Categories
- Logical: CustomerOfferWS - GetCodeList
- Logical: Financing Package
- Logical: Financing Package Criterion
- Logical: FinancingPackageValues
- Logical: GetCommodityValidationRuleCodeLists
- Logical: GetFinancingPackageCodeLists
- Logical: Product Management
- Logical: Product Offer Limit
- Logical: Product Offers generated for External system
- Logical: Salesroom
- Logical: Subventions
- Logical: Temporary Application - detail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Active | boolean | true |
| Tax Rate | Percent |  |
