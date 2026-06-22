---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageCodeLists"
domain: "Modules"
element_id: 1775267
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}ServiceType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageCodeLists

## 📝 Notes

{DEL PCG-4293/}
This data type defines list of Service Type.
If not successfully retrieved then add NOTAVAILABLE_SERVICETYPE to GetSalesPackageCodeListsResponse.errorCode.

## 🔗 Connections (2)

- → Dependency: [[Service Type (Class 1880808)]]
- ← Dependency: [[{DEL}GetSalesPackageCodeListsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| active | boolean |  |
