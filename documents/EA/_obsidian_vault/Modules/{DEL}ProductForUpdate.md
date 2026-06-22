---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL"
domain: "Modules"
element_id: 1683300
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {DEL}ProductForUpdate

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL

## 📝 Notes

{DEL PCG-3311/}

## 🔗 Connections (3)

- → Dependency: [[{DEL}ProductVariantsForUpdate]]
- → Dependency: [[{DEL}CommodityTypesForUpdate]]
- ← Dependency: [[{DEL}Products (Class 1683299)]]

## 📊 Appears In (1 diagrams)

- Logical: Product Catalog API in BSL

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| approvalDocument | string |  |
| productVariants | ProductVariantsForUpdate |  |
| comodityTypes | CommodityTypesForUpdate |  |
| versionStatus | string |  |
| plannedActivationDate | date |  |
| validTo | date |  |
