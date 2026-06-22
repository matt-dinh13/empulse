---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model"
domain: "Modules"
element_id: 1879084
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 Closed End Loan Product Variant

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model

## 📝 Notes

This class is specialization of class Product variant for Closed end loan product. Intended for Products based on Product profiles with ProductType = CEL.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[{DEL}ProductVariantCELDataDto]]
- → Generalization: [[Product Variant (Class 1879099)]]
- → Dependency: [[Number of advanced payments]]

## 📊 Appears In (3 diagrams)

- Logical: Entities to be removed
- Logical: Product data synchronization mapping
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Annual Interest Rate | Percent |  |
| Terms | List <Integer> |  |
