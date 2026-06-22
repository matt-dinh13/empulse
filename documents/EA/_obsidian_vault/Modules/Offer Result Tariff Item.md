---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result"
domain: "Modules"
element_id: 1172248
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 Offer Result Tariff Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result

## 🔗 Connections (4)

- → Dependency: [[{MOD}Tariff]]
- → Dependency: [[{MOD}Tariff Item]]
- → Aggregation: [[Offer Result]]
- ← Association: [[Offer Result Service Tariff Item]]

## 📊 Appears In (3 diagrams)

- Logical: Offer Result
- Logical: Offer Result Service
- Logical: Offer Result Tariff Item

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Tariff | Version ID Type |  |
| Tariff Item | Code |  |
| Tariff Item Amount | decimal |  |
| Percentage Base Amount | decimal |  |
| Limit Number Base Amount | decimal |  |
| Limit Amount Base Amount | decimal |  |
