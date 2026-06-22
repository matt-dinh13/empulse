---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/User Interface"
domain: "Modules"
element_id: 1831508
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 List of tariffs

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/User Interface

## 📝 Notes

Default order: active (true on top), code asc.
Paging: No.

## 🔗 Connections (1)

- → Realisation: [[{DEL}04.070 Show Tariff version detail]]

## 📊 Appears In (1 diagrams)

- Custom: Search for tariffs

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Version number | int |  |
| Version status | char |  |
| Currency | enum |  |
| Type | enum |  |
| Active | checkbox |  |
| Version activated | date |  |
| Detail | icon |  |
