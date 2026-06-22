---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792927
diagrams: 1
connections: 1
tags:
  - object
  - modules
---

# 🔸 Available Services

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

List of services available to be assigned to the sales package (services which are not already assigned today or in future).

Visible only for Type = SERVICE.

Data are retrieved by method SalesPackageWS.GetSalesPackageCodeLists.Service (in attribute description referenced as Service).

{ADD PCG-822_19}
Filtered according to selected service type in combobox Service type.
{/ADD}

Data in grid can be additionally filtered according to rule Filter available sales package items for an assignment to sales package.

Paging: yes

## 🔗 Connections (1)

- → Dependency: [[{ADD}Filter available sales package items for an assignment to sales package]]

## 📊 Appears In (1 diagrams)

- Custom: Assign Sales Package Items

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Valid from | date |  |
| Valid to | date |  |
| Selection | checkbox | false |
