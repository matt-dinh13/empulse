---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API"
domain: "Modules"
element_id: 1633267
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Fee

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API

## 🔗 Connections (4)

- → Dependency: [[Tariff (Class 1633270)]]
- → Dependency: [[TariffItem]]
- → Dependency: [[Money]]
- ← Dependency: [[OfferParameters]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Calculation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | int |  |
| tariffItem | tariffItem |  |
| tariff | Tariff |  |
| tariffItemCode | string |  |
