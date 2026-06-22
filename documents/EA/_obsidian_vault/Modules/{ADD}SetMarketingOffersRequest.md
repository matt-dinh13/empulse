---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/SetMarketingOffers"
domain: "Modules"
element_id: 1250482
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}SetMarketingOffersRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/SetMarketingOffers

## 📝 Notes

{ADD PCG-688_3/}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}MarketingOfferWS]]
- → Dependency: [[{ADD}HookOffer]]

## 📊 Appears In (1 diagrams)

- Logical: MarketingOfferWS - SetMarketingOffers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| businessChannel | string |  |
| CUID | string |  |
| offer | {ADD}HookOffer |  |
