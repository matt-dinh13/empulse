---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG"
domain: "Modules"
element_id: 1204003
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Tariff Management

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG

## 📝 Notes

Tariff management is one of main business entities of Product catalog module (PCG). It consists of these key entities:

- Tariff - defines fees and penalties for product/service (and therefore for contracts based on this product)
- Tariff Item - keeps financial definition of individual Tariff Item (fee/penalty) of a Tariff on basis of a Tariff Item Type
- Tariff Item Type - defines basic behavior of all fee/penalty types which serves as template for creating Tariff Items in a Tariff.

A combination of tariff, tariff item and tariff item type enables to store information about different kinds of tariff data.

## Data structure

- Tariff
- Tariff Type
- Tariff Item
- Tariff Item Group
- Tariff Item Group To Tariff Item Type
- Tariff Item Type
- Tariff Item Type Flag

## 📊 Appears In (1 diagrams)

- Custom: PCG
