---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity"
domain: "Modules"
element_id: 1852290
diagrams: 3
connections: 5
tags:
  - class
  - modules
---

# 🔷 CommodityResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity

## 🔗 Connections (5)

- → Dependency: [[{MOD}CommodityDto]]
- → Dependency: [[ValidationError (Class 1844803)]]
- ← Dependency: [[commodities-validation-cancelation]]
- ← Dependency: [[commodites]]
- ← Dependency: [[commodities-validation]]

## 📊 Appears In (3 diagrams)

- Logical: commodities
- Logical: commodities-validation
- Logical: commodities-validation-cancelation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodity | {MOD}CommodityDto |  |
| errorMessage | ValidationError |  |
