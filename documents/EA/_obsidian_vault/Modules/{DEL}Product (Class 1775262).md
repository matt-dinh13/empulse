---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageCodeLists"
domain: "Modules"
element_id: 1775262
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}Product

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageCodeLists

## 📝 Notes

{DEL PCG-4293/}
This data type defines list of Product where VersionStatus = ACTIVE. 
If not successfully retrieved then add NOTAVAILABLE_PRODUCT to GetSalesPackageCodeListsResponse.errorCode.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}GetSalesPackageCodeListsResponse]]
- → Dependency: [[{MOD}Product]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| validFrom | date |  |
| validTo | date |  |
