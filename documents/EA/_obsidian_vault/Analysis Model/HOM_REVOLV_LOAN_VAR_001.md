---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371208
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_REVOLV_LOAN_VAR_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

This class is specialization of class Product variant for Revolving product. Intended for Products based on Product profiles with Product Type = Revolving Loan.

## 🔗 Connections (1)

- → Generalization: [[HOM_PRODUCT_VARIANT_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| product variant ID | number |  |
| min installment base | string |  |
| min installment rate | number |  |
| min installment fixed amount | number |  |
| min installment fixed amount currency | string |  |
| min installment rounding | string |  |
| min installment rounding scale | number |  |
| installment prescription min limit | number |  |
| installment prescription min limit currency | string |  |
| statement printout template | string |  |
