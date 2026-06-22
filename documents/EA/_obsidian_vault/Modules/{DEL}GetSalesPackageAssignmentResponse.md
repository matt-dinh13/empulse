---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignment"
domain: "Modules"
element_id: 1775283
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}GetSalesPackageAssignmentResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignment

## 📝 Notes

{DEL PCG-4293/}

## 🔗 Connections (5)

- ← Dependency: [[{DEL}SalesPackageWS]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[{DEL}ValidationCodeGetSalesPackageAssignment]]
- → Dependency: [[{DEL}ResultGetSalesPackageAssignment]]
- → Dependency: [[{DEL}ResultCodeGetSalesPackageAssignment]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackageAssignment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesPackageAssignment | {DEL}ResultGetSalesPackageAssignment |  |
| validationResult | ValidationResult |  |
| result | {DEL}ResultCodeGetSalesPackageAssignment |  |
