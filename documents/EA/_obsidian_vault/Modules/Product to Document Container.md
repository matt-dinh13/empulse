---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model"
domain: "Modules"
element_id: 1879108
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Product to Document Container

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model

## 📝 Notes

This entity is used to define which containers are bound to which products and under which constraints.

## 🔗 Connections (4)

- → Dependency: [[Client Scoring Segment]]
- → Association: [[Document Container (Class 1485210)]]
- ← Association: [[{MOD}Product]]
- → Dependency: [[2SP Block of Data Type]]

## 📊 Appears In (1 diagrams)

- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Min Count Of Documents | Number |  |
| When Required In 2SP | 2SP Block of Data Type |  |
| Required for Client Scoring Segment | Client Scoring Segment |  |
| Document Container Code | String |  |
