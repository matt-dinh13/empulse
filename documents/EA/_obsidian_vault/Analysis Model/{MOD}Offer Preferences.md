---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model"
domain: "Analysis Model"
element_id: 1878188
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Offer Preferences

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model

## 📝 Notes

Set of input parameters for product calculator (alternative offers).

## 🔗 Connections (3)

- ← Aggregation: [[Offer prefererences Qualification criteria]]
- ← Aggregation: [[Offer Preferences Product]]
- → Aggregation: [[Offer Financial Parameter]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Offer ID | number |  |
| Product Type | ProductType |  |
| Product Selection Type | string |  |
| Same Product | boolean |  |
| Minimal Installment | Financial amount |  |
| Cash Payment Max | Financial Amount |  |
| Cash Payment Min | Financial amount |  |
| Credit Amount Max | Financial Amount |  |
| Credit Amount Max Original | Financial Amount |  |
| Credit Amount Min  | Financial Amount |  |
| EIR Max | Percentage |  |
| EIR Min | Percentage |  |
| GiftPayment Disallowed | boolean |  |
| Grace Period Disallowed | boolean |  |
| InsuranceRequired | boolean |  |
| Required Insurance Type1 | Service Type |  |
| Required Insurance Type2 | string |  |
| Offer Valid To | date |  |
| Term Max | number |  |
| Term Min | number |  |
| Sort Attribute1 | string |  |
| Sort Order 1 | string |  |
| Sort Attribute 2 | string |  |
| Sort Order 2 | string |  |
| Offers Number | string |  |
| Is For Refinance | boolean |  |
| Pricing Category | number |  |
| {ADD}Is REL To Original CEL | boolean |  |
