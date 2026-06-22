---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.SetCustomerMarketingOffer"
domain: "Modules"
element_id: 1351021
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}SetCustomerMarketingOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.SetCustomerMarketingOffer

## 🔗 Connections (1)

- ← Dependency: [[CustomerMarketingOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerMarketingOfferWS - SetCustomerMarketingOffer

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
| maximalMonthlyInstallment | Financial Amount |  |
| minimalCashPayment | Financial Amount |  |
| businessChannel | string |  |
| calculationChannel | string |  |
| {ADD}jointLendingPartner | string |  |
