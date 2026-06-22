---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists"
domain: "Modules"
element_id: 1775292
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}GetSalesPackageAssignmentCodeListsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists

## 📝 Notes

{DEL PCG-4293/}

## 🔗 Connections (4)

- ← Dependency: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}SalesPackage]]
- → Dependency: [[{DEL}ErrorCodeGetSalesPackageAssignmentCodeLists]]
- → Dependency: [[{DEL}Salesroom]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackageAssignmentCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {DEL}salesroom | External Reference |  |
| salesPackage | {DEL}SalesPackage |  |
| errorCode | {DEL}ErrorCodeGetSalesPackageAssignmentCodeLists |  |
