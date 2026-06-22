---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer"
domain: "Modules"
element_id: 1147579
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 SetBlockCustomerMarketingOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer

## 🔗 Connections (2)

- → Dependency: [[MarketingOfferBlockerType]]
- ← Dependency: [[CustomerMarketingOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerMarketingOfferWS - SetBlockCustomerMarketingOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | string |  |
| offerID | string |  |
| blockerType | MarketingOfferBlockerType |  |
| blockerID | string |  |
| block | boolean |  |
| note | string |  |
