---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists"
domain: "Modules"
element_id: 1509425
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 CommodityType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists

## 📝 Notes

This data type defines list of Commodity Type. 
If not successfully retrieved then add NOTAVAILABLE_COMMODITYTYPE to GetFinancingPackageCodeListsResponse.errorCode.

## 🔗 Connections (2)

- ← Dependency: [[GetFinancingPackageCodeListsResponse]]
- → Dependency: [[Commodity Type (Class 1758904)]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | LocalizedString |  |
| sortOrder | Number |  |
| active | boolean |  |
| categoryCode | string |  |
