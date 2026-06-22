---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package"
domain: "Modules"
element_id: 1775366
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}SalesPackageItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package

## 📝 Notes

{DEL PCG-4293/}
LDM: SalesPackage

## 🔗 Connections (4)

- → Dependency: [[Service (Class 1880804)]]
- → Dependency: [[{MOD}Product]]
- → Dependency: [[Sales Package Item Type]]
- ← Dependency: [[{DEL}SalesPackageValues]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}SalesPackageValues

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| code | string |  |
| validFrom | datetime |  |
| validTo | datetime |  |
