---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules"
domain: "Analysis Model"
element_id: 1817939
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Save Marketing Offer to BSL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules

## 📝 Notes

Input:
- CUID
- responseCMO.CustomerMarketingOffer(CMO)

// Read marketing offers
System prepares request for creating product offer limits (SetProductOfferLimitRequest) with parameters:
- request.offerID = CMO.offerID   
- request.CUID = CUID from input
- request.offerName = CMOData.offerName
- request.validFrom = CMOData.validFrom
- request.validTo = CMOData.validTo
- request.campaignID = CMOData.campaignID
- request.campaignType = CMOData.campaignType
- request.campaignSubtype = CMOData.campaignSubtype
- request.productType = CMOData.productType
- request.initialTransactionType = CMOData.initialTransactionType 
- request.commodityType = CMOData.commodityType 
- request.marketingAction = CMOData.marketingAction 
- request.product = set of CMOData.product
- request.maximalCreditAmount = CMOData.maximalCreditAmount 
- request.minimalCashPayment= CMOData.minimalCashPayment(Amount)
- request.maximalMonthlyPayment= CMOData.maximalMonthlyPayment
and sends the request via ProductOfferLimitWS.SetProductOfferLimit (UC 02.901 Set product offer limits)
System receives response (SetProductOfferLimitResponse).
If response.result <> OK then raise exception.

## 🔗 Connections (2)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules - Marketing Offers
- Use Case: Choose product offer
- Use Case: Fill in application
