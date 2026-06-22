---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/ProductOfferLimitsWS.GetProductOfferLimits"
domain: "Modules"
element_id: 1350976
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 OfferLimitDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/ProductOfferLimitsWS.GetProductOfferLimits

## 📝 Notes

Response is filled in from responseMO.CustomerMarketingOfferDataProduct (in attribute description is referred as MO).

## 🔗 Connections (2)

- → Dependency: [[OfferLimitProduct (Class 1350977)]]
- ← Dependency: [[GetProductOfferLimitsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: ProductOfferLimitsWS - GetProductOfferLimits

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerName | string |  |
| campaignID | string |  |
| productType | string |  |
| initialTransactionType | string |  |
| maxCreditAmount | MoneyDto |  |
| maxMonthlyInstallment | MoneyDto |  |
| minCashPayment | MoneyDto |  |
| products | OfferLimitProduct |  |
| validFrom | date |  |
| validTo | date |  |
| {ADD}jointLendingPartner | string |  |
