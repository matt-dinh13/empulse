---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Code Lists"
domain: "Modules"
element_id: 1845794
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 TariffItemTypeCodeListItemDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Code Lists

## 🔗 Connections (8)

- → Dependency: [[Tariff Item Type Flag Type]]
- → Dependency: [[Tariff Item Usage]]
- → Dependency: [[Effective Date Type]]
- → Dependency: [[Tariff item category type]]
- → Dependency: [[TariffItemTypeRelationDto]]
- ← Dependency: [[CodeListsDto]]
- → Dependency: [[Charging Periodicity Type]]
- → Dependency: [[Accounting Representation]]

## 📊 Appears In (2 diagrams)

- Logical: Code Lists
- Logical: Tariff Item Type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | LocalizedString |  |
| active | boolean |  |
| accountingRepresentation | string |  |
| category | string |  |
| usage | string |  |
| printOrder | integer |  |
| chargingPeriodicity | string |  |
| effectiveDateType | string |  |
| flags | string |  |
| groups | string |  |
| relations | TariffItemTypeRelationDto |  |
| description | string |  |
| {ADD}serviceLock | string |  |
