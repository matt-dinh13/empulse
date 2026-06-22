---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.SetProductOfferLimit"
domain: "Modules"
element_id: 1355137
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 SetProductOfferLimitRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.SetProductOfferLimit

## 🔗 Connections (1)

- ← Dependency: [[ProductOfferLimitWS]]

## 📊 Appears In (1 diagrams)

- Logical: ProductOfferLimitsWS - SetProductOfferLimit

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerID | string |  |
| deactivate | boolean |  |
| evaluationExpiration | datetime |  |
| CUID | string |  |
| offerName | string |  |
| validFrom | date |  |
| validTo | date |  |
| campaignID | string |  |
| campaignType | string |  |
| campaignSubtype | string |  |
| productType | string |  |
| initialTransactionType | string |  |
| commodityType | string |  |
| marketingAction | string |  |
| product | string |  |
| pricingCategory | integer |  |
| maximalCreditAmount | Financial Amount |  |
| minimalCashPayment | Financial Amount |  |
| maximalMonthlyInstallment | Financial Amount |  |
| {ADD}jointLendingPartner | string |  |
