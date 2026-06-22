---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface"
domain: "Modules"
element_id: 1860774
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 List of Financing Packages

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface

## 📝 Notes

Displays list of Financing Package versions returned in ResultGetFinancingPackage (result)
Each result.FinancingPackageValues is referenced as FPValues in attribute description.
Each result.VersionData is referenced as FPVersion in attribute description.

Default order: Code asc, VersionNumber asc
Paging: Yes

## 🔗 Connections (1)

- → Realisation: [[{DEL}04.435 Show Financing Package version detail UI]]

## 📊 Appears In (1 diagrams)

- Custom: Search Financing Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Valid from | string |  |
| Valid to | string |  |
| Version activated | date |  |
| Version number | int |  |
| Detail | icon |  |
| Version status | char |  |
