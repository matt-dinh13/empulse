---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data"
domain: "Modules"
element_id: 1860334
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {DEL}ProductVariantProductTypeDataDto

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data

## 📝 Notes

Switch for differentiation of data specific for product variant of particular product type.
If the type is not mentioned in the switch then no specific data are generated.

## 🔗 Connections (3)

- → Dependency: [[{DEL}ProductVariantCELDataDto]]
- ← Association: [[{DEL}ProductVariantDataDto]]
- → Dependency: [[{DEL}ProductVariantRELDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: Product data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CEL | {DEL}ProductVariantCELDataDto |  |
| REL | {DEL}ProductVariantRELDataDto |  |
