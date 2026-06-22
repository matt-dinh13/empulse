---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Data"
domain: "Modules"
element_id: 1824583
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}ProductDataDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Data

## 📝 Notes

The list of product codes delimited by comma

## 🔗 Connections (3)

- → Dependency: [[ProductDataDtoCommodityTypes]]
- → Dependency: [[ProductDataDtoMaximalPartnerSubvention]]
- ← Dependency: [[ProductDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Product Data
- Logical: ProductDataDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| commodityTypes | ProductDataDtoCommodityTypes |  |
| minimalInterestRate | int |  |
| maximalInterestRate | int |  |
| maximalPartnerSubvention | ProductDataDtoMaximalPartnerSubvention |  |
| terms | int |  |
| {ADD}minimalAmount | int |  |
| {ADD}maximalAmount | int |  |
