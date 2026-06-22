---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/GetMarketingOffers"
domain: "Modules"
element_id: 1241595
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 MarketingOfferData

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/GetMarketingOffers

## 📝 Notes

Choice reflects MarketingOffer.offerType.

## 🔗 Connections (3)

- ← Dependency: [[MarketingOffer]]
- → Dependency: [[MarketingOfferDataNonProduct]]
- → Dependency: [[{MOD}MarketingOfferDataProduct]]

## 📊 Appears In (1 diagrams)

- Logical: MarketingOfferWS - GetMarketingOffers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| NON_PRODUCT | MarketingOfferDataNonProduct |  |
| PRODUCT | {MOD}MarketingOfferDataProduct |  |
