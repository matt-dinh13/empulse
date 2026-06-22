---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Logical Data Model"
domain: "Analysis Model"
element_id: 1511110
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Product Offer Calculation Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Logical Data Model

## 📝 Notes

Request for calculation of product offers raised via web service.

## 🔗 Connections (8)

- → Dependency: [[Currency (Class 1819822)]]
- ← Association: [[Product Offer Response]]
- ← Aggregation: [[Product Offer Request Commodity]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Generalization: [[Product Offer Request]]
- → Dependency: [[Loan Option]]
- ← Aggregation: [[Product Offer Request Service Preference]]
- ← Aggregation: [[Product Offer Request Document Type]]

## 📊 Appears In (1 diagrams)

- Logical: Product Offers generated for External system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Loan Option | Loan Option |  |
| Request DateTime | datetime |  |
| Salesroom | Salesroom |  |
| Required Loan Amount | decimal |  |
| Required Extra Limit | decimal |  |
| Currency | Currency |  |
| MaximalMonthlyPayment | decimal |  |
| Maximal Cash Payment | decimal |  |
| CampaignID | string |  |
| CUID | string |  |
| Bound Offer Code | string |  |
| Service Type | string |  |
| SalesAgentCode | Sales agent code |  |
| OfferID | string |  |
