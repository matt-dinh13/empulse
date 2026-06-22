---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package"
domain: "Modules"
element_id: 1775363
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 {DEL}SalesPackageValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package

## 📝 Notes

{DEL PCG-4293/}
LDM: SalesPackage

## 🔗 Connections (3)

- ← Dependency: [[{DEL}ResultGetSalesPackage]]
- → Dependency: [[{DEL}SalesPackageItem]]
- ← Dependency: [[{DEL}SetSalesPackage (Class 1775621)]]

## 📊 Appears In (3 diagrams)

- Logical: {DEL}SalesPackageValues
- Logical: GetSalesPackage
- Logical: SetSalesPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| description | string |  |
| active | boolean |  |
| item | {DEL}SalesPackageItem |  |
