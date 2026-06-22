---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Business Rules"
domain: "Modules"
element_id: 1495736
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check if Marketing Offer is blocked

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Business Rules

## 📝 Notes

Input:
- CUID
- OfferID

System creates request for blocked marketing offers (GetBlockCustomerMarketingOfferRequest) with parameters:
- request.CUID = CUID from input
- request.offerID = OfferID from input
and sends the request via CustomerMarketingOfferWS.GetBlockCustomerMarketingOffer (UC 02.913 Get Block of Customer Marketing Offers).
System receives response (GetBlockCustomerMarketingOfferResponse).
If no response received or response.resultCode <> SUCCESS then log an error and return False.
Return response.block.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules - Provide Product Offer Limits
- Use Case: Customer Marketing Offers
