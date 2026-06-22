---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model"
domain: "Analysis Model"
element_id: 1861978
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Campaign Offer

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model

## 📝 Notes

This entity keeps basic data of a campaign for REL credit limit changes.

## 🔗 Connections (2)

- ← Aggregation: [[Credit Limit Change Offer (Class 1861979)]]
- ← Association: [[Credit Limit Change Contract Supplement]]

## 📊 Appears In (1 diagrams)

- Logical: Credit limit change offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Campaign External Id | string |  |
| Campaign Name | string |  |
| Valid From | Date |  |
| Valid To | Date |  |
| Reason Description | string |  |
| Source System Code | string |  |
