---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists"
domain: "Modules"
element_id: 1509436
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Manufacturer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists

## 📝 Notes

This data type defines list of Manufacturer. 
If not successfully retrieved then add NOTAVAILABLE_MANUFACTURER to GetFinancingPackageCodeListsResponse.errorCode.

## 🔗 Connections (2)

- → Dependency: [[Manufacturer (Class 1879136)]]
- ← Dependency: [[GetFinancingPackageCodeListsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | LocalizedString |  |
| sortOrder | Number |  |
| active | boolean |  |
