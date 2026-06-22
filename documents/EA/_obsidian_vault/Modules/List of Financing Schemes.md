---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/User Interface"
domain: "Modules"
element_id: 1831568
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 List of Financing Schemes

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/User Interface

## 📝 Notes

Displays list of Financing Scheme versions returned in ResultGetFinancingScheme (result)
Each result.FinancingSchemeValues is referenced as FSValues in attribute description.
Each result.VersionData is referenced as FSVersion in attribute description.

Default order: code asc, version asc
Paging: Yes

## 🔗 Connections (1)

- → Realisation: [[{DEL}04.425 Show Financing Scheme version detail UI]]

## 📊 Appears In (1 diagrams)

- Custom: Search Financing Scheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Valid from | string |  |
| Valid to | string |  |
| Version number | int |  |
| Version status | char |  |
| Version activated | date |  |
| Detail | icon |  |
