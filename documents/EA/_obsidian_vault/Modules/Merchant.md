---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists"
domain: "Modules"
element_id: 1509422
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Merchant

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists

## 📝 Notes

This data type defines list of merchant codes.
The list is retrieved from external component by the rule Get List of Merchants.
If not successfully retrieved then add NOTAVAILABLE_MERCHANT to GetFinancingPackageCodeListsResponse.errorCode.

## 🔗 Connections (2)

- → Dependency: [[Get List of Merchants]]
- ← Dependency: [[GetFinancingPackageCodeListsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
