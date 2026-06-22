---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules"
domain: "Analysis Model"
element_id: 1817942
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Block Marketing Offer by Contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules

## 📝 Notes

Input:
- OfferID
- CUID of client
- ContractCode

// Block marketing offers related to the contract
System creates request for blocking marketing offers (SetBlockCustomerMarketingOfferRequest) with parameters:
- request.CUID = CUID
- request.offerID = OfferID
- request.blockerType = CONTRACT
- request.blockerID = ContractCode
- request.block = True
and sends the request via CustomerMarketingOfferWS.SetBlockCustomerMarketingOffer (UC 02.914 Set Block on Customer Marketing Offers).
System receives response (SetBlockCustomerMarketingOfferResponse).
If no response received or response.resultCode <> SUCCESS then log an error and continue.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}06.010 Identify Client]]
- → Dependency: [[02.914 Set Block on Customer Marketing Offers (UseCase 1612682)]]
- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules - Marketing Offers
- Use Case: Receive evaluation results
