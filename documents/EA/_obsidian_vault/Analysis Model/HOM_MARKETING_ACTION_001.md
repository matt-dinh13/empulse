---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371213
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_MARKETING_ACTION_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Marketing action points exactly to one product. (oppposite to general M:N relation). Products referenced by marketing actions can contain only product variants for which tuple (creditAmount, term) is determining at most one product variant.

## 🔗 Connections (1)

- ← Dependency: [[HOM_PROD2MARKETNG_ACTN_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| value | string |  |
| description | string |  |
| sort order | number |  |
| active flag | boolean |  |
