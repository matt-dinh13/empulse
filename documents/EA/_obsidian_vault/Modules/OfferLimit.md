---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.ImportOfferLimits"
domain: "Modules"
element_id: 1380708
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 offerLimit

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.ImportOfferLimits

## 📝 Notes

Header of set of offer limits (header of campaign) that defines common limits

## 🔗 Connections (4)

- → Dependency: [[OfferLimitProduct (Class 1380710)]]
- → Association: [[ImportOfferLimitRequest]]
- → Association: [[offerLimitSegment]]
- → Association: [[offerLimitClient]]

## 📊 Appears In (1 diagrams)

- Logical: ProductOfferLimitsWS - ImportOfferLimits method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| campaignID | string |  |
| offerName | string |  |
| campaignType | string |  |
| campaignSubtype | string |  |
| offerLimitProduct | OfferLimitProduct |  |
| minimalCashPayment | Money |  |
| validFrom | date |  |
| validTo | date |  |
| productType | string |  |
| initialTransactionType | string |  |
| productCode | string |  |
| commodityTypeCode | string |  |
| marketingActionCode | string |  |
| {ADD}jointLendingPartner | string |  |
