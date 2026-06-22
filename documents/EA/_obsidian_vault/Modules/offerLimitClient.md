---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.ImportOfferLimits"
domain: "Modules"
element_id: 1380707
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 offerLimitClient

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.ImportOfferLimits

## 📝 Notes

Set of clients assigned to offer limit header with their specific limits.

## 🔗 Connections (2)

- → Dependency: [[OfferLimitProduct (Class 1380710)]]
- ← Association: [[offerLimit]]

## 📊 Appears In (1 diagrams)

- Logical: ProductOfferLimitsWS - ImportOfferLimits method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | string |  |
| maximalCreditAmount | Money |  |
| maximalMonthlyInstallment | Money |  |
| offerLimitProduct | OfferLimitProduct |  |
| evaluationExpiration | datetime |  |
| pricingCategory | integer |  |
