---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageCodeLists"
domain: "Modules"
element_id: 1775263
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 {DEL}GetSalesPackageCodeListsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageCodeLists

## 📝 Notes

{DEL PCG-4293/}

## 🔗 Connections (6)

- ← Dependency: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}Service]]
- → Dependency: [[{DEL}ErrorCodeGetSalesPackageCodeLists]]
- → Dependency: [[{DEL}ServiceType (Class 1775267)]]
- → Dependency: [[{DEL}SalesPackageItemType]]
- → Dependency: [[{DEL}Product (Class 1775262)]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesPackageItemType | {DEL}SalesPackageItemType |  |
| product | {DEL}Product |  |
| service | {DEL}Service |  |
| {ADD}serviceType | {DEL}ServiceType |  |
| errorCode | {DEL}ErrorCodeGetSalesPackageCodeLists |  |
