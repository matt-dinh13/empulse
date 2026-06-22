---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/RespondToMarketingOffers"
domain: "Modules"
element_id: 1229693
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 RespondToMarketingOffersRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/RespondToMarketingOffers

## 🔗 Connections (2)

- → Dependency: [[MarketingOfferResponseData]]
- ← Dependency: [[{MOD}MarketingOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: MarketingOfferWS - RespondToMarketingOffers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| businessChannel | string |  |
| userID | string |  |
| responseDateTime | datetime |  |
| marketingOfferResponse | string |  |
