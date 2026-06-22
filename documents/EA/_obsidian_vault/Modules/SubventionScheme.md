---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists"
domain: "Modules"
element_id: 1509435
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 SubventionScheme

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists

## 📝 Notes

This data type defines list of Subvention Scheme.

## 🔗 Connections (3)

- → Dependency: [[Subvention Scheme (Class 1865382)]]
- → Dependency: [[Subvention Participant]]
- ← Dependency: [[GetFinancingPackageCodeListsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | LocalizedString |  |
| active | boolean |  |
| isDefault | boolean |  |
| byCommodityType | boolean |  |
| participant | string |  |
