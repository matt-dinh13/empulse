---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792914
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 List of Sales Packages

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

Displays list of Sales Packages returned in ResultGetSalesPackage (result)
Each result.SalesPackageValues is referenced as SPValues in attribute description.

Default order: Code asc
Paging: Yes

## 🔗 Connections (1)

- → Realisation: [[{DEL}09.315 Show Sales Package detail UI]]

## 📊 Appears In (1 diagrams)

- Custom: Search Sales Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Description | string |  |
| Active | checkbox |  |
| Detail | icon |  |
