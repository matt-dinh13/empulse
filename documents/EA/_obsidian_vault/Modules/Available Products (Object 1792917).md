---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792917
diagrams: 1
connections: 1
tags:
  - object
  - modules
---

# 🔸 Available Products

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

List of products available to be assigned to the sales package (products which are not already assigned today or in future).

Visible only for Type = PRODUCT.

Data are retrieved by method SalesPackageWS.GetSalesPackageCodeLists.Product (in attribute description referenced as Product).

Data in grid can be filtered according to rule Filter available sales package items for an assignment to sales package.

Paging: yes

## 🔗 Connections (1)

- → Dependency: [[{ADD}Filter available sales package items for an assignment to sales package]]

## 📊 Appears In (1 diagrams)

- Custom: Assign Sales Package Items

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Valid from | date |  |
| Name | string |  |
| Valid to | date |  |
| Selection | checkbox | false |
