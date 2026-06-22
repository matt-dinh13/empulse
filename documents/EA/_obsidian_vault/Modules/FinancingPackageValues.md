---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CreateFinancingPackage"
domain: "Modules"
element_id: 1627141
diagrams: 4
connections: 8
tags:
  - class
  - modules
---

# 🔷 FinancingPackageValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CreateFinancingPackage

## 📝 Notes

LDM: FinancingPackage

## 🔗 Connections (8)

- ← Dependency: [[ResultGetFinancingPackage]]
- ← Dependency: [[CreateFinancingPackage (Class 1198418)]]
- ← Dependency: [[UpdateFinancingPackage (Class 1261019)]]
- → Dependency: [[FinancingPackageCriterion]]
- → Dependency: [[FinancingPackageInitialPaymentLimit (Class 1627147)]]
- → Dependency: [[FinancingPackageFlag]]
- → Dependency: [[{MOD}FinancingPackageSubvention]]
- → Dependency: [[FinancingPackageItem]]

## 📊 Appears In (4 diagrams)

- Logical: CreateFinancingPackage
- Logical: FinancingPackageValues
- Logical: GetFinancingPackage
- Logical: UpdateFinancingPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| description | string |  |
| descriptionSale | string |  |
| validFrom | datetime |  |
| validTo | datetime |  |
| criterion | FinancingPackageCriterion |  |
| item | FinancingPackageItem |  |
| flag | FinancingPackageFlag |  |
| subvention | {MOD}FinancingPackageSubvention |  |
| initialPaymentLimit | FinancingPackageInitialPaymentLimit |  |
