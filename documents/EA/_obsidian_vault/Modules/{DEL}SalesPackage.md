---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists"
domain: "Modules"
element_id: 1775291
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}SalesPackage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists

## 📝 Notes

{DEL PCG-4293/}
This data type defines list of Sales Package. 
If not successfully retrieved then add NOTAVAILABLE_SALESPACKAGE to GetSalesPackageAssignmentCodeListsResponse.errorCode.

## 🔗 Connections (2)

- → Dependency: [[Sales Package]]
- ← Dependency: [[{DEL}GetSalesPackageAssignmentCodeListsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackageAssignmentCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| active | boolean |  |
