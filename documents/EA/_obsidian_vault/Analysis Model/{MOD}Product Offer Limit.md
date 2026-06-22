---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model"
domain: "Analysis Model"
element_id: 1350944
diagrams: 2
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Product Offer Limit

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model

## 📝 Notes

Record in this entity contains limits of cross-sell offers (for existing clients) or limits of bound offers (for prospect clients), which are used as parameters for product offer calculation.
Offers limits are generated outside BSL system and periodically imported.

## 🔗 Connections (10)

- ← Generalization: [[Product Offer Limit Client]]
- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[Marketing Action (Class 1879118)]]
- ← Generalization: [[Product Offer Limit Segment]]
- ← Aggregation: [[Product Offer Limit Product]]
- → Dependency: [[{MOD}Product]]
- → Dependency: [[Product Transaction Type]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Dependency: [[Offer Financial Parameter]]

## 📊 Appears In (2 diagrams)

- Logical: Offer Financial Parameters
- Logical: Product Offer Limit

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| LimitID | string |  |
| Active | boolean | True |
| OfferID | string |  |
| Evaluation Expiration | datetime |  |
| Valid From | date |  |
| Valid To | date |  |
| Batch Code | string |  |
| Offer Name | string (20) |  |
| Campaign ID | string (20) |  |
| Campaign Type | string (20) |  |
| Campaign Subtype | string (20) |  |
| Product Type | string |  |
| Initial Transaction Type | string |  |
| Maximal Credit Amount | Financial Amount |  |
| Maximal Monthly Installment | Financial Amount |  |
| Minimal Cash Payment | Financial Amount |  |
| Commodity Type | string |  |
| Marketing Action | string |  |
| Pricing Category | integer |  |
| {ADD}Calculation channel | string |  |
| {ADD}Joint Lending Partner | string |  |
