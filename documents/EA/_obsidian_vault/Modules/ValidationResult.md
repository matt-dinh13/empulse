---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}SetCommodityValidationRule"
domain: "Modules"
element_id: 1275271
diagrams: 18
connections: 19
tags:
  - class
  - modules
---

# 🔷 ValidationResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}SetCommodityValidationRule

## 🔗 Connections (19)

- ← Dependency: [[ResultCreateFinancingPackage]]
- ← Dependency: [[ResultCreateFinancingScheme]]
- ← Dependency: [[GetFinancingSchemeResponse]]
- ← Dependency: [[ResultCancelFinancingPackage]]
- ← Dependency: [[ResultCancelFinancingScheme]]
- ← Dependency: [[GetFinancingPackageResponse]]
- ← Dependency: [[ResultUpdateFinancingPackage]]
- ← Dependency: [[ResultUpdateFinancingScheme]]
- ← Dependency: [[ResultActivateFinancingPackage]]
- → Dependency: [[CheckingLevelType]]
- ← Dependency: [[ResultActivateFinancingScheme]]
- ← Dependency: [[{DEL}ResultSetCommodityValidationRule]]
- ← Dependency: [[{DEL}GetCommodityValidationRuleResponse]]
- ← Dependency: [[{DEL}ResultArchiveCommodityValidationRule]]
- ← Dependency: [[{DEL}GetSalesPackageResponse]]
- ← Dependency: [[{DEL}ResultSetSalesPackageAssignment]]
- ← Dependency: [[{DEL}GetSalesPackageAssignmentResponse]]
- ← Dependency: [[{DEL}GetSalesroomSalesItemResponse]]
- ← Dependency: [[{DEL}ResultSetSalesPackage]]

## 📊 Appears In (18 diagrams)

- Logical: {DEL}SetCommodityValidationRule
- Logical: ActivateFinancingPackage
- Logical: ActivateFinancingScheme
- Logical: CancelFinancingPackage
- Logical: CancelFinancingScheme
- Logical: CreateFinancingPackage
- Logical: CreateFinancingScheme
- Logical: GetCommodityValidationRule
- Logical: GetFinancingPackage
- Logical: GetFinancingScheme
- Logical: GetSalesPackage
- Logical: GetSalesPackageAssignment
- Logical: GetSalesroomSalesItems
- Logical: Product Catalogue Common Types
- Logical: SetSalesPackage
- Logical: SetSalesPackageAssignment
- Logical: UpdateFinancingPackage
- Logical: UpdateFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | string |  |
| description | string |  |
| checkingLevel | CheckingLevelType |  |
