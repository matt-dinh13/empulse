---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.GetCustomerMarketingOffer"
domain: "Modules"
element_id: 1476350
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 GetCustomerMarketingOfferResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.GetCustomerMarketingOffer

## 🔗 Connections (3)

- ← Dependency: [[CustomerMarketingOfferWS]]
- → Dependency: [[CustomerMarketingOffer]]
- → Dependency: [[GetCustomerMarketingOfferResultType]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerMarketingOfferWS - GetCustomerMarketingOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offer | CustomerMarketingOffer |  |
| priority | int |  |
| noOffers | boolean |  |
| resultCode | GetCustomerMarketingOfferResultType |  |
