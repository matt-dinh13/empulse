---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1865389
diagrams: 8
connections: 15
tags:
  - enumeration
  - modules
---

# 📝 {MOD}Financing Package Criterion Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules

## 🔗 Connections (15)

- ← Dependency: [[FinancingPackageCriterionType]]
- ← Dependency: [[{MOD}FinancingPackageValues - validation rules]]
- ← Dependency: [[{MOD}FinancingPackageCriterionDto]]
- → Dependency: [[{MOD}Service type]]
- → Dependency: [[Get List of Merchants]]
- ← Dependency: [[Financing Package Criterion Value Combination Item]]
- → Dependency: [[Service Level]]
- → Dependency: [[{ADD}Model]]
- → Dependency: [[Manufacturer (Class 1879136)]]
- → Dependency: [[{MOD}Transaction Type]]
- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[{MOD}Insurance type]]
- ← Dependency: [[{MOD}Financing Package Criterion]]
- → Dependency: [[Financing Package Purpose]]
- → Dependency: [[Segment]]

## 📊 Appears In (8 diagrams)

- Custom: Financing Package Values - validation rules
- Custom: PCG-5499 CBL-29460 BNPL - Get correct pricing with multiple Commodities
- Custom: PCG-5647 BRPH-2755 - Optimizing Subvention Management
- Logical: Financing Package
- Logical: Financing Package Criterion
- Logical: FinancingPackageDto
- Logical: GetFinancingPackageCodeLists
- Logical: Service Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| PURPOSE |  |  |
| TRANSACTION_TYPE |  |  |
| MINIMAL_TRANSACTION_DATE |  |  |
| MAXIMAL_TRANSACTION_DATE |  |  |
| MERCHANT |  |  |
| COMMODITY_TYPE |  |  |
| COMMODITY_MODEL |  |  |
| COMMODITY_MANUFACTURER |  |  |
| COMMODITY_MODEL_CODE |  |  |
| SERVICE_TYPE |  |  |
| INSURANCE_TYPE |  |  |
| IPPACK_SERVICE_LEVEL |  |  |
| SEGMENT |  |  |
| {ADD}MAX_NUMER_OF_ITEMS |  |  |
