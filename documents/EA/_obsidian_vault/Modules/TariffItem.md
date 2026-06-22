---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API"
domain: "Modules"
element_id: 1633278
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 TariffItem

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API

## 🔗 Connections (3)

- → Dependency: [[Money]]
- → Dependency: [[TariffItemType]]
- ← Dependency: [[Fee (Class 1633267)]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Calculation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| calculationMethod | string |  |
| code | string |  |
| fixedAmount | Money |  |
| percentage | int |  |
| percentageBasedOn | string |  |
| tariffCode | string |  |
| tariffItemType | TariffItemType |  |
| tariffVersion | int |  |
