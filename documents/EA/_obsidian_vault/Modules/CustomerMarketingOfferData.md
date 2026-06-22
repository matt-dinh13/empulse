---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.GetCustomerMarketingOffer"
domain: "Modules"
element_id: 1476347
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 CustomerMarketingOfferData

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.GetCustomerMarketingOffer

## 📝 Notes

Choice reflects CustomerMarketingOffer.offerType.

## 🔗 Connections (3)

- → Dependency: [[{MOD}CustomerMarketingOfferDataProduct]]
- ← Dependency: [[CustomerMarketingOffer]]
- → Dependency: [[CustomerMarketingOfferDataNonProduct]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerMarketingOfferWS - GetCustomerMarketingOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| NON_PRODUCT | CustomerMarketingOfferDataNonProduct |  |
| PRODUCT | CustomerMarketingOfferDataProduct |  |
