---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/COMMON for Financing Package"
domain: "Modules"
element_id: 1627140
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {MOD}FinancingPackageSubvention

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/COMMON for Financing Package

## 📝 Notes

This class defines parameters for calculation of Subventions on Financing Package level. 

Flags on Financing Scheme.
LDM: FinancingPackage.FinancingPackageFlag

## 🔗 Connections (4)

- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[Subvention Purpose]]
- ← Dependency: [[FinancingPackageValues]]
- → Dependency: [[Subvention Scheme (Class 1865382)]]

## 📊 Appears In (1 diagrams)

- Logical: FinancingPackageValues

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| subventionScheme | string |  |
| commodityType | string |  |
| fixedAmount | decimal |  |
| percentage | decimal |  |
| code | string |  |
| toClientPercentage | decimal |  |
| percentageBase | string |  |
| {ADD}purpose | string |  |
