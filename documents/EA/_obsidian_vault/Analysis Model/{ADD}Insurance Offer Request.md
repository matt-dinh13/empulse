---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Logical Data Model"
domain: "Analysis Model"
element_id: 1877505
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Insurance Offer Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Logical Data Model

## 📝 Notes

{ADD CSI-2738 /}
Loan Service Request extension of Insurance offer for the CEL contracts

## 🔗 Connections (1)

- → Generalization: [[Loan Service Request (Class 1868549)]]

## 📊 Appears In (1 diagrams)

- Logical: LSR.Insurance Offer - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Insurance Period Start | Date |  |
| Insurance Period End | Date |  |
| Insurance Premium Amount | Financial Amount |  |
| Premium Tariff Item Code | string |  |
| Current Monthly Installment | Financial Amount |  |
| Future Monthly Installment | Financial Amount |  |
| First Due Date Insurance | Date |  |
| Remaining Installments Count | int |  |
| Sum Insured | Financial Amount |  |
