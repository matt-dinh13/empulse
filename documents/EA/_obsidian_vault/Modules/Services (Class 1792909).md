---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792909
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

Displays list of SPItem with SPItem.type = SERVICE assigned on Sales Package.

Ordered by SPItem.code asc.

Sortable by code, {PCG-2026 ADD}name,{/ADD} valid from and valid to.

Visible only if any SPItem with SPItem.type = SERVICE is assigned to Sales Package.

Paging: yes

Localization code: SP_Services

## 📊 Appears In (1 diagrams)

- Custom: Set Sales Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Valid From | date |  |
| Valid To | date |  |
| Delete | icon |  |
| {ADD}Name | string |  |
