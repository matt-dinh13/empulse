---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792906
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Products

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

Displays list of SPItem with SPItem.type = PRODUCT assigned on Sales Package.

Ordered by SPItem.code asc.

Sortable by code, {PCG-2026 ADD}name,{/ADD} valid from and valid to.

Visible only if any SPItem with SPItem.type = PRODUCT is assigned to Sales Package.

Paging: yes

Localization code: SP_Products

## 📊 Appears In (1 diagrams)

- Custom: Show Sales Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Valid From | date |  |
| {ADD}Name | string |  |
| Valid To | date |  |
