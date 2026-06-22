---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371190
diagrams: 2
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PRODUCT_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Product is the core entity describing structure of business that can be done in HS system. It describes the type of contracts that may be created, and their basic allowed and required parameters product is used at contract origination as basis for contract creation.

## 🔗 Connections (12)

- ← Aggregation: [[HOM_PROD2MARKETNG_ACTN_001]]
- ← Aggregation: [[HOM_PROD_DOC_PRINTOUT_001]]
- → Dependency: [[HOM_TARIFF_001]]
- ← Aggregation: [[HOM_PRODUCT2SERVICE_TP_001]]
- ← Aggregation: [[HOM_PROD2COMMODITY_TP_001]]
- ← Aggregation: [[HOM_PRODUCT_VARIANT_001]]
- → Dependency: [[HOM_TERMS_AND_COND_001]]
- ← Aggregation: [[HOM_PRODUCT2SALES_AREA_001]]
- ← Aggregation: [[HOM_SUBVENTION_001]]
- → Dependency: [[HOM_PRODUCT_PROFILE_001]]
- ← Aggregation: [[HOM_PRODUCT2SERVICE_001]]
- ← Aggregation: [[HOM_COL_PROD2MANUFACT_001]]

## 📊 Appears In (2 diagrams)

- Logical: Product (DWH Interface)
- Logical: Tariff (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| product profile ID | HOM_PRODUCT_PROFILE_001 |  |
| currency code | string |  |
| description | string |  |
| sale description | string |  |
| valid from | date |  |
| valid to | date |  |
| calculation type | string |  |
| terms and conditions code | HOM_TERMS_AND_COND_001 |  |
| max goods number | number |  |
| alternative | boolean |  |
| tariff code | HOM_TARIFF_001 |  |
| installment due day shift | number |  |
