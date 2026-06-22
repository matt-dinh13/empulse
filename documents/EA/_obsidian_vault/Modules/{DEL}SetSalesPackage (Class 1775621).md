---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}SetSalesPackage"
domain: "Modules"
element_id: 1775621
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}SetSalesPackage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}SetSalesPackage

## 📝 Notes

{DEL PCG-4293/}

## 🔗 Connections (2)

- → Dependency: [[{DEL}SalesPackageValues]]
- ← Dependency: [[{DEL}SetSalesPackageRequest]]

## 📊 Appears In (1 diagrams)

- Logical: SetSalesPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| code | string |  |
| create | boolean |  |
| values | SalesPackageValues |  |
