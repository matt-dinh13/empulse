---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857112
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Interest rates

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Grid containing the list of all interest rates applicable for application's selected product offer.

Visible only if the application is based on a REL product type (i.e. Contract.Contract_Type = 'REL').

Note: The ordering of individual records within the grid cannot be changed by user.

LDM source:
Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Product_Variant->Product->Tariff->Tariff_Item.* where Tariff_Item_Type.Category='I' //Interest.

Localization code:
PRD_OfferRELInterestRates

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Interest type | Tariff Item Type Name |  |
| Value | percentage |  |
