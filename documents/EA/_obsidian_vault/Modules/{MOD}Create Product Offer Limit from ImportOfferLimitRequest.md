---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.ImportOfferLimits"
domain: "Modules"
element_id: 1380780
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Create Product Offer Limit from ImportOfferLimitRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.ImportOfferLimits

## 📝 Notes

Input:
- requestItem (record from offerLimitClient or offerLimitSegment)
Output:
- POL (record in Product Offer Limit)

Note: 
requestItem.offerLimit is below referenced as requestPOL

Create record in POL and set its attributes as follows:
LimitID = unique key (automatically generated)
Active = True
OfferID = unique code, automatically generated, due to possible duplicity with offers from SAS contains prefix 'BSL_'.
ValidFrom = requestPOL.validFrom
ValidTo = requestPOL.validTo
BatchCode = requestPOL.ImportOfferLimitRequest.batchCode
Offer Name = requestPOL.offerName
Campaign ID = requestPOL.campaignID
Campaign Type = requestPOL.campaignType
Campaign Subtype = requestPOL.campaignSubtype
Product Type = requestPOL.productType
Initial Transaction Type = requestPOL.initialTransactionType
Maximal Credit Amount = requestItem.maximalCreditAmount
Maximal Monthly Installment = requestItem.maximalMonthlyPayment
Minimal Cash Payment = requestPOL.minimalCashPayment
Commodity Type = requestPOL.commodityType
Marketing Action = requestPOL.marketingAction
EvaluationExpiration = requestPOL.evaluationExpiration 
PricingCategory= requestPOL.pricingCategory
CUID = requestItem.CUID in case of requestItem from offerLimitClient
Segment = requestItem.Segment in case of requestItem from offerLimitSegment
{ADD PCG-1651}Joint Lending Partner = requestPOL.jointLendingPartner{/ADD}

If exists a requestItem.OfferLimitProduct (requestItemProduct) then 
- for each requestItemProduct create POL.Product Offer Limit Product (POLProduct) and set POLProduct.Product = requestItemProduct.productCode
else
- for each requestPOL.OfferLimitProduct(requestPOLProduct) create POL.Product Offer Limit Product (POLProduct) and set POLProduct.Product = requestPOLProduct.productCode

## 🔗 Connections (1)

- ← Dependency: [[02.900 Import product offer limits]]

## 📊 Appears In (2 diagrams)

- Logical: ProductOfferLimitsWS - ImportOfferLimits method
- Use Case: Management of Product Offer Limits
