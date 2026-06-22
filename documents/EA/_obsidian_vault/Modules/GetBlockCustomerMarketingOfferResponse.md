---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer"
domain: "Modules"
element_id: 1147583
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 GetBlockCustomerMarketingOfferResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer

## 🔗 Connections (3)

- → Dependency: [[GetBlockCustomerMarketingOfferResultType]]
- → Dependency: [[GetBlockCustomerMarketingOfferDetail]]
- ← Dependency: [[CustomerMarketingOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerMarketingOfferWS - GetBlockCustomerMarketingOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | SetBlockCustomerMarketingOfferResultType |  |
| block | boolean |  |
| blocker | GetBlockCustomerMarketingOfferDetail |  |
