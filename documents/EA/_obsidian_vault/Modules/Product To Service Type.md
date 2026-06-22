---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data"
domain: "Modules"
element_id: 1879089
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 Product To Service Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data

## 📝 Notes

Assignment of services types to product.
Defines the common properties for assigned services of particular type.

## 🔗 Connections (4)

- ← Dependency «mapping»: [[{DEL}ProductServiceTypeDataDto]]
- → Dependency: [[Service Type (Class 1880808)]]
- → Aggregation: [[{MOD}Product]]
- → Dependency: [[Service Type Adjustment Rule]]

## 📊 Appears In (2 diagrams)

- Logical: Product data synchronization mapping
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service Type | Code |  |
| Adjustment Rule | Service Type Adjustment Rule |  |
