---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}SetSalesPackageAssignment"
domain: "Modules"
element_id: 1775274
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}ResultSetSalesPackageAssignment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}SetSalesPackageAssignment

## 🔗 Connections (4)

- → Dependency: [[{DEL}ValidationCodeSetSalesPackageAssignment]]
- → Dependency: [[ValidationResult]]
- ← Dependency: [[{DEL}SetSalesPackageAssignmentResponse]]
- → Dependency: [[{DEL}ResultCodeSetSalesPackageAssignment]]

## 📊 Appears In (1 diagrams)

- Logical: SetSalesPackageAssignment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| validationResult | ValidationResult |  |
| result | {DEL}ResultCodeSetSalesPackageAssignment  |  |
