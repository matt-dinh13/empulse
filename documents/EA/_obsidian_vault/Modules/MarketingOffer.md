---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/GetMarketingOffers"
domain: "Modules"
element_id: 1241596
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 MarketingOffer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/GetMarketingOffers

## 🔗 Connections (3)

- → Dependency: [[MarketingOfferData]]
- ← Dependency: [[GetMarketingOffersResponse]]
- → Dependency: [[MarketingOfferType]]

## 📊 Appears In (1 diagrams)

- Logical: MarketingOfferWS - GetMarketingOffers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerID | string |  |
| offerType | Marketing Offer Type |  |
| data | MarketingOfferData |  |
| responseCode | string |  |
| responseOption | string |  |
| comment | string(1024) |  |
