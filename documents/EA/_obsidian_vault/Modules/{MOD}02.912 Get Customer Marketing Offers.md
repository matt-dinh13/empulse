---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Access Rights"
domain: "Modules"
element_id: 1612678
diagrams: 6
connections: 18
tags:
  - usecase
  - modules
---

# 🎯 {MOD}02.912 Get Customer Marketing Offers

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Access Rights

## 📝 Notes

This technical, non-visual use case. 
Provides with list of Marketing Offers for particular client/segment defined by CUID/Segment code with respect to selection criteria (business channel, campaign, etc.).
Adds also information for next processing (availability on particular salesroom, etc.).

## 🔗 Connections (18)

- ← Dependency: [[CustomerMarketingOfferWS]]
- ← Association: [[Internal Component]]
- → Association: [[Campaign system (SAS)]]
- → Dependency: [[Check if Marketing Offer is available for Salesroom]]
- → Dependency: [[Check if Marketing Offer is blocked]]
- → Dependency: [[GetMarketingOffersResponse - validation rules]]
- → Realisation: [[02.912 Get Customer Marketing Offers]]
- ← UseCase «include»: [[02.902 Get product offer limit (UseCase 1612671)]]
- ← UseCase «include»: [[{DEL}02.906 Marketing Offers Management (UseCase 1727569)]]
- ← Dependency: [[{MOD}06.030 Show Client Data]]
- ← Dependency: [[Is Marketing Offer available on Salesroom]]
- ← Dependency: [[Is Marketing Offer to be Responded (Requirement 1817938)]]
- ← Dependency: [[X-sell offer calculation method]]
- ← Dependency: [[Bound offers calculation method]]
- ← Dependency: [[{MOD}CalculateCustomerOfferRequest - Check Marketing Offer]]
- ← Dependency: [[Customer offers (GUIElement 1871767)]]
- ← Dependency: [[Customer offers (GUIElement 1881265)]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: Business Rules - Marketing Offers
- Logical: CustomerMarketingOfferWS - GetCustomerMarketingOffer
- Use Case: Customer Marketing Offers
- Use Case: Get product offer limits (ProductOfferLimitsWS + OpenAPI)
- Use Case: Management of Marketing Offers
