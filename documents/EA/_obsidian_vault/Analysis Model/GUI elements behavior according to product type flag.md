---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model"
domain: "Analysis Model"
element_id: 1708943
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 GUI elements behavior according to product type flag

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model

## 📝 Notes

This rule applies only for revolving without initial transaction of X-Sell or Bound offer with assigned product, that is:

	
- Product_Offer_Limit -> Product_Offer_Limit_Product.Product_Code <> ""
or
PartyOffers.Offer.productCodes is not null.
and


	
- Attributes of such product are Product_type = 'REL' and Inititial_transaction_type = 'NDF'.


For these offers system modifies fields in panel Financial Parameters in product calculator according to product type flag. When one or more products have assigned flag:
- only SAFE_CARD - fields Credit amount and Maximum monthly payment are hidden
- only BUDGET_CARD - field Credit amount is hidden and calculated as 10x Maximum monthly payment. Field Maximum monthly payment is mandatory
- none or both flags - no change to GUI

## 🔗 Connections (3)

- ← Dependency: [[Credit amount (GUIElement 1823041)]]
- ← Dependency: [[Maximum monthly payment (GUIElement 1823030)]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Use Case: Choose product offer
