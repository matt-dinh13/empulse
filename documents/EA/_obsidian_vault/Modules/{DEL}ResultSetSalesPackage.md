---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}SetSalesPackage"
domain: "Modules"
element_id: 1775620
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}ResultSetSalesPackage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}SetSalesPackage

## 📝 Notes

{DEL PCG-4293/}

## 🔗 Connections (4)

- → Dependency: [[ValidationResult]]
- → Dependency: [[{DEL}ValidationCodeSetSalesPackage]]
- → Dependency: [[{DEL}ResultCodeSetSalesPackage]]
- ← Dependency: [[{DEL}SetSalesPackageResponse]]

## 📊 Appears In (1 diagrams)

- Logical: SetSalesPackage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| validationResult | ValidationResult |  |
| result | {DEL}ResultCodeSetSalesPackage  |  |
