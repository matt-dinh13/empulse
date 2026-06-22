---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Logical Data Model"
domain: "Modules"
element_id: 1879040
diagrams: 3
connections: 7
tags:
  - class
  - modules
---

# 🔷 Commodity Validation

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Logical Data Model

## 🔗 Connections (7)

- ← Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Dependency: [[{MOD}ValidateCommodityResponse]]
- ← Dependency: [[{MOD}ValidateCommodityResponse]]
- ← Dependency: [[{MOD}ValidateCommodityResponse]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- → Dependency: [[Result Code Type]]
- → Aggregation: [[{MOD}Commodity (Class 1879036)]]

## 📊 Appears In (3 diagrams)

- Logical: Commodity Data
- Logical: Commodity validation log
- Logical: External Commodity validation mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Request ID | Text |  |
| External Type | {MOD}ValidateCommodityRequest |  |
| External Result Code | Text |  |
| Note | Text |  |
| Result Code | Result Code Type |  |
