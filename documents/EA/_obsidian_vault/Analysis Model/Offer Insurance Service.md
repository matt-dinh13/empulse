---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model"
domain: "Analysis Model"
element_id: 1878171
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Offer Insurance Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model

## 📝 Notes

Adds insurance specific information for insurance services adjusted in the offer.

## 🔗 Connections (4)

- → Dependency: [[Insurance Contract (Class 1852795)]]
- → Generalization: [[Offer Service (Class 1878189)]]
- → Dependency: [[Insurance Program]]
- ← Aggregation: [[Offer Insurance Custom Data]]

## 📊 Appears In (2 diagrams)

- Logical: Offer Service
- Logical: Temporary Application - Financial Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Insurance Contract Code | Text |  |
| Insurance Program Code | Text |  |
| Insurance Program Version | Number |  |
| Sum Insured | Number |  |
| Estimated First Period Start | Date |  |
| Estimated First Period End | Date |  |
