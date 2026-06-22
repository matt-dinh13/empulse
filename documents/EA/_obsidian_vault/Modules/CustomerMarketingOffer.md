---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.GetCustomerMarketingOffer"
domain: "Modules"
element_id: 1476352
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 CustomerMarketingOffer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.GetCustomerMarketingOffer

## 🔗 Connections (3)

- ← Dependency: [[GetCustomerMarketingOfferResponse]]
- → Dependency: [[CustomerMarketingOfferType]]
- → Dependency: [[CustomerMarketingOfferData]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerMarketingOfferWS - GetCustomerMarketingOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerID | string |  |
| fromSAS | boolean | false |
| offerType | CustomerMarketingOfferType |  |
| offerPriority | int |  |
| data | CustomerMarketingOfferData |  |
| responseCode | string |  |
| responseOption | string |  |
| comment | string(1024) |  |
