---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371216
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PRODUCT_VARIANT_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

For every Product there is one or more Product Variants which contains basic financial characteristics of the product annual interest rate, minimum and maximum credit amount range, number of advanced payments, down payment range, installment calculation type and based on calculation type.

## 🔗 Connections (3)

- ← Generalization: [[HOM_CLSD_END_LN_VAR_001]]
- ← Generalization: [[HOM_REVOLV_LOAN_VAR_001]]
- → Aggregation: [[HOM_PRODUCT_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| product ID | number |  |
| code | string |  |
| max credit amount currency | string |  |
| max credit amount | number |  |
| min credit amount currency | string |  |
| min credit amount | number |  |
| preference type | string |  |
| calculation method type | string |  |
| min cash payment amount | number |  |
| max cash payment amount | number |  |
| min cash payment rate | number |  |
| max cash payment rate | number |  |
