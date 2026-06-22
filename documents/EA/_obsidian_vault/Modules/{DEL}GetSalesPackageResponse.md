---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackage"
domain: "Modules"
element_id: 1775253
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}GetSalesPackageResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackage

## 📝 Notes

{DEL PCG-4293/}

## 🔗 Connections (5)

- ← Dependency: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}ResultCodeGetSalesPackage]]
- → Dependency: [[{DEL}ResultGetSalesPackage]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[{DEL}ValidationCodeGetSalesPackage]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesPackage | ResultGetSalesPackage |  |
| validationResult | ValidationResult |  |
| result | {DEL}ResultCodeGetSalesPackage |  |
