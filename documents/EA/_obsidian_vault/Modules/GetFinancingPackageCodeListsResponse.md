---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists"
domain: "Modules"
element_id: 1509428
diagrams: 1
connections: 14
tags:
  - class
  - modules
---

# 🔷 GetFinancingPackageCodeListsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists

## 🔗 Connections (14)

- ← Dependency: [[FinancingSchemeWS]]
- → Dependency: [[TransactionType]]
- → Dependency: [[FinancingPackageCriterionType]]
- → Dependency: [[FinancingScheme]]
- → Dependency: [[Manufacturer (Class 1509436)]]
- → Dependency: [[CommodityCategory (Class 1509429)]]
- → Dependency: [[SubventionScheme]]
- → Dependency: [[FinancingPackageInitialPaymentLimit]]
- → Dependency: [[ErrorCodeGetFinancingPackageCodeLists]]
- → Dependency: [[CommodityType]]
- → Dependency: [[FinancingPackageFlagType]]
- → Dependency: [[FinancingPackagePurpose]]
- → Dependency: [[Merchant]]
- → Dependency: [[{ADD}SubventionPurpose]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingPackageCriterionType | FinancingPackageCriterionType |  |
| merchant | Merchant |  |
| financingPackagePurpose | FinancingPackagePurpose |  |
| transactionType | TransactionType |  |
| commodityType | CommodityType |  |
| commodityCategory | CommodityCategory |  |
| manufacturer | Manufacturer |  |
| financingScheme | FinancingScheme |  |
| financingPackageFlagType | FinancingPackageFlagType |  |
| subventionScheme | SubventionScheme |  |
| financingPackageInitialPaymentLimitType | FinancingPackageInitialPaymentLimit |  |
| {ADD}subventionPurpose | SubventionPurpose |  |
| errorCode | ErrorCodeGetFinancingPackageCodeLists |  |
