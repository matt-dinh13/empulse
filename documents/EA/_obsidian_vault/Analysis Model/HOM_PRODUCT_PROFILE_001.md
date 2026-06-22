---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371185
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PRODUCT_PROFILE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Only HCI can create, update or remove this entity (using Excel).

## 🔗 Connections (4)

- ← Aggregation: [[HOM_PROFILE2PROD_SET_001]]
- → Dependency: [[HOM_PRODUCT_TYPE_001]]
- ← Aggregation: [[HOM_PROFILE_INST_SCHED_001]]
- ← Dependency: [[HOM_PRODUCT_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| product type code | HOM_PRODUCT_TYPE_001 |  |
| accounting method type | string |  |
| active flag | boolean |  |
| contract processing type | string |  |
| app form sel alg type | string |  |
| pref first due date alg type | string |  |
| application form | string |  |
| initial transaction type | string |  |
| max duration | number |  |
| is debit | boolean |  |
| first billing period alg type | string |  |
| product purpose | string |  |
