---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API"
domain: "Modules"
element_id: 1715905
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 {ADD}getIpOffersRequest

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API

## 📝 Notes

{ADD PCG-1563/}

## 🔗 Connections (6)

- → Dependency: [[{ADD}contractData (Class 1715904)]]
- → Dependency: [[{ADD}ServiceBundle]]
- → Dependency: [[{ADD}goodsData]]
- → Dependency: [[{ADD}clientData]]
- ← Dependency: [[{ADD}OfferCalculation]]
- → Dependency: [[{ADD}filteringCriteria]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Calculation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| queryDate | date |  |
| transferDate | date |  |
| clientData | clientData |  |
| serviceBundle | serviceData |  |
| filteringCriteria | filteringCriteria |  |
| goodsItems | goodsData |  |
| contractData | contractData |  |
