---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model"
domain: "Analysis Model"
element_id: 1861979
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Credit Limit Change Offer

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model

## 📝 Notes

This entity keeps information about demanded credit limit change on particular REL account based on credit limit change campaign.

## 🔗 Connections (3)

- → Usage: [[{MOD}Contract (Class 1879596)]]
- → Aggregation: [[Campaign Offer (Class 1861978)]]
- ← Association: [[Credit Limit Change Contract Supplement]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Supplements
- Logical: Credit limit change offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Account Number | string |  |
| Requested Credit Limit | Financial Amount |  |
| Current Credit Limit | Financial Amount |  |
| Contract Code | string |  |
| {ADD}Offer Id | string |  |
