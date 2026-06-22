---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/SetMarketingOffers"
domain: "Modules"
element_id: 1250481
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}HookOffer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/SetMarketingOffers

## 📝 Notes

{ADD PCG-688_3/}

## 🔗 Connections (2)

- → Dependency: [[{ADD}ResponseAdditionalInfo]]
- ← Dependency: [[{ADD}SetMarketingOffersRequest]]

## 📊 Appears In (1 diagrams)

- Logical: MarketingOfferWS - SetMarketingOffers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerID | string |  |
| evaluationExpiration | datetime |  |
| {MOD}validTo | datetime |  |
| commodityType | string |  |
| marketingAction | string |  |
| product | string |  |
| minimalCashPayment | decimal |  |
| maximalCreditAmount | decimal |  |
| pricingCategory | integer |  |
| productType | string |  |
| maximalMonthlyInstallment | decimal |  |
| initialTransactionType | string |  |
| additionalInfo | {ADD}ResponseAdditionalInfo |  |
