---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}ArchiveCommodityData"
domain: "Modules"
element_id: 1746105
diagrams: 17
connections: 64
tags:
  - interface
  - modules
---

# 🔶 {DEL}CommodityWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}ArchiveCommodityData

## 📝 Notes

{DEL PCG-3924/}
Interface for data management for Commodity entity

## 🔗 Connections (45)

- → Realisation: [[{DEL}01.698 Provide commodity validation data for external systems]]
- → Dependency: [[{DEL}ArchiveCommodityDataResponse]]
- → Realisation: [[{DEL}02.470 Provide Commodity Type Data]]
- → Dependency: [[{DEL}01.602 Get Commodity Validation Rule]]
- → Dependency: [[{DEL}GetCommodityValidationRuleRequest]]
- → Dependency: [[{DEL}CreateCommodityDataRequest]]
- → Dependency: [[{DEL}GetCommodityCategoryDataResponse]]
- → Realisation: [[{DEL}01.691 Provide commodity data for update from external systems]]
- → Dependency: [[{ADD}SearchCommodityDataResponse]]
- → Realisation: [[{DEL}01.697 Archive commodity data from external systems]]
- → Dependency: [[{DEL}GetCommodityDataForUpdateResponse]]
- → Dependency: [[{DEL}GetCommodityTypeDataResponse]]
- → Dependency: [[{DEL}ArchiveCommodityDataRequest]]
- → Realisation: [[{DEL}01.604 Archive Commodity Validation Rule]]
- → Dependency: [[{DEL}GetCommodityDataForUpdateRequest]]
- → Dependency: [[{DEL}SearchCommodityDataRequest]]
- → Dependency: [[{DEL}CreateCommodityDataResponse]]
- → Realisation: [[{DEL}01.692 Update commodity data from external systems]]
- → Dependency: [[{DEL}GetCommodityDataCodeListsResponse]]
- → Realisation: [[{DEL}01.694 Create commodity data from external systems]]
- → Dependency: [[{DEL}UpdateCommodityDataResponse]]
- → Dependency: [[{DEL}GetCommodityValidationDataResponse]]
- → Realisation: [[{DEL}01.695 Provide commodity data code lists for external systems]]
- → Dependency: [[{DEL}GetCommodityDataRequest]]
- → Dependency: [[{DEL}GetCommodityTypeDataRequest]]
- → Dependency: [[{DEL}GetCommodityDataResponse]]
- → Dependency: [[{DEL}GetCommodityValidationRuleCodeListsResponse]]
- → Dependency: [[{DEL}GetCommodityTypeCriterionResponse]]
- → Dependency: [[{DEL}ArchiveCommodityValidationRuleResponse]]
- → Dependency: [[{DEL}ValidateCommodityDataResponse]]
- → Realisation: [[{DEL}01.603 Get Commodity Validation Rule Code Lists]]
- → Realisation: [[{DEL}01.693 Validate commodity data from external systems]]
- → Dependency: [[{DEL}GetCommodityValidationRuleResponse]]
- → Dependency: [[{DEL}GetCommodityValidationDataRequest]]
- → Realisation: [[{DEL}01.690 Provide commodity data for external systems]]
- → Dependency: [[{DEL}ArchiveCommodityValidationRuleRequest]]
- → Dependency: [[{DEL}GetCommodityCategoryDataRequest]]
- → Realisation: [[{DEL}01.601 Set Commodity Validation Rule]]
- → Dependency: [[{DEL}ValidateCommodityDataRequest]]
- → Dependency: [[{DEL}SetCommodityValidationRuleResponse]]
- → Realisation: [[{DEL}02.480 Provide Commodity Category Data]]
- → Realisation: [[{DEL}01.696 Search commodity data from external systems]]
- → Dependency: [[{DEL}02.490 Provide Commodity Type Criterion]]
- → Dependency: [[{DEL}UpdateCommodityDataRequest]]
- → Dependency: [[{DEL}SetCommodityValidationRuleRequest]]

## 📊 Appears In (17 diagrams)

- Logical: {DEL}ArchiveCommodityData
- Logical: {DEL}CommodityWS
- Logical: {DEL}GetCommodityCategoryData
- Logical: {DEL}GetCommodityData
- Logical: {DEL}GetCommodityDataCodeLists
- Logical: {DEL}GetCommodityTypeCriterion
- Logical: {DEL}GetCommodityTypeData
- Logical: {DEL}SetCommodityValidationRule
- Logical: {DEL}ValidateCommodityData
- Logical: ArchiveCommodityValidationRule
- Logical: CreateCommodityData
- Logical: GetCommodityDataForUpdate
- Logical: GetCommodityValidationData
- Logical: GetCommodityValidationRule
- Logical: GetCommodityValidationRuleCodeLists
- Logical: SearchCommodityData
- Logical: UpdateCommodityData
