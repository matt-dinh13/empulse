---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists"
domain: "Modules"
element_id: 1775289
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}Salesroom

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists

## 📝 Notes

{DEL PCG-822_19/}
This data type defines list of Salesrooms in all statuses except for Close. 
If not successfully retrieved then add NOTAVAILABLE_SALESROOM to GetSalesPackageAssignmentCodeListsResponse.errorCode.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}GetSalesPackageAssignmentCodeListsResponse]]
- → Dependency: [[Salesroom (Class 1556394)]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackageAssignmentCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
