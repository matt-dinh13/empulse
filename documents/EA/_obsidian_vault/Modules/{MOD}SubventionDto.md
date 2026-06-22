---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product"
domain: "Modules"
element_id: 1850260
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 {MOD}SubventionDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product

## 🔗 Connections (5)

- → Dependency: [[SubventionParticipantTypeDto]]
- → Dependency: [[RoundingTypeDto]]
- → Dependency: [[Subvention Purpose]]
- ← Dependency: [[{MOD}ProductDto]]
- ← Usage: [[Input (Class 1873252)]]

## 📊 Appears In (2 diagrams)

- Logical: ProductDto
- Logical: ProductInputDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| participantType | SubventionParticipantTypeDto |  |
| toClientPercentage | int |  |
| fixedAmount | int |  |
| percentageType | string |  |
| percentage | int |  |
| discount | boolean |  |
| commodityType | string |  |
| roundingType | string |  |
| roundingScale | int |  |
| purpose | string |  |
| modelCode | string |  |
| {ADD}minimalGoodsPrice | int |  |
| {ADD}maximalGoodsPrice | int |  |
| {ADD}minimalCommodityPrice | int |  |
| {ADD}maximalCommodityPrice | int |  |
| {ADD}promoActionCode | string |  |
