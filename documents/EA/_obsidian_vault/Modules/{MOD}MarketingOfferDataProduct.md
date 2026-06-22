---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/GetMarketingOffers"
domain: "Modules"
element_id: 1241591
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}MarketingOfferDataProduct

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/GetMarketingOffers

## 🔗 Connections (1)

- ← Dependency: [[MarketingOfferData]]

## 📊 Appears In (1 diagrams)

- Logical: MarketingOfferWS - GetMarketingOffers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerName | string |  |
| campaignID | string |  |
| {MOD}campaignType | string |  |
| {MOD}campaignSubtype | string |  |
| {MOD}validFrom | datetime |  |
| {MOD}validTo | datetime |  |
| productType | string |  |
| initialTransactionType | string |  |
| {MOD}product | string |  |
| marketingAction | string |  |
| commodityType | string |  |
| currency | string |  |
| minimalCashPayment | decimal |  |
| maximalCreditAmount | decimal |  |
| maximalMonthlyInstallment | decimal |  |
| {ADD}evaluationExpiration | datetime |  |
| {ADD}pricingCategory | integer |  |
