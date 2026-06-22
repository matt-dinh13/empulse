---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/RespondToMarketingOffers"
domain: "Modules"
element_id: 1229695
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 MarketingOfferResponseData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/RespondToMarketingOffers

## 🔗 Connections (2)

- ← Dependency: [[RespondToMarketingOffersRequest]]
- → Dependency: [[ResponseAdditionalInfo]]

## 📊 Appears In (1 diagrams)

- Logical: MarketingOfferWS - RespondToMarketingOffers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerID | string |  |
| responseCode | string |  |
| comment | string(1024) |  |
| additionalInfo | ResponseAdditionalInfo |  |
