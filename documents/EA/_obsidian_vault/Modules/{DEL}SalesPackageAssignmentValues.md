---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package"
domain: "Modules"
element_id: 1775367
diagrams: 3
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}SalesPackageAssignmentValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package

## 📝 Notes

{DEL PCG-4293/}
LDM: SalesroomToSalesPackage

## 🔗 Connections (2)

- ← Dependency: [[{DEL}SetSalesPackageAssignment (Class 1775275)]]
- ← Dependency: [[{DEL}ResultGetSalesPackageAssignment]]

## 📊 Appears In (3 diagrams)

- Logical: {DEL}SalesPackageAssignmentValues
- Logical: GetSalesPackageAssignment
- Logical: SetSalesPackageAssignment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
| salesPackageCode | string |  |
| validFrom | datetime |  |
| validTo | datetime |  |
