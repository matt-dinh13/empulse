---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules"
domain: "Analysis Model"
element_id: 1817945
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Get Product Type of Marketing Offer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules

## 📝 Notes

// Product types allowed by Product Offer Limits
Input:
- Selected Marketing Offer (MO)

Output:
- set of combinations product type + initial transaction type

If any product is assigned to MO then
-- return distinct set of product types (product.ProductProfile.ProductType, product.ProductProfile.InitialTransaction type) of products assigned to Marketing offer
else
-- return combination (PartyOffers.Offer.productType and .initTransactionType)

## 🔗 Connections (3)

- ← Dependency: [[Selection of Product Type for product calculation in LOR area]]
- ← Dependency: [[Selection of Product Type for product calculation]]
- ← Dependency: [[Marketing Offer Limits]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules - Marketing Offers
- Custom: Marketing Offer Limits
- Use Case: Choose product offer
