---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1825189
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}CalculateCustomerOfferRequest - Check Marketing Offer

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

// Searching for marketing offer defined by CampaignID and CUID/boundOfferCode 

Input:
- request for calculation of product offers (see CalculateCustomerOfferRequest)

Output:
- ResultCode
- responseCMO - structure containing Marketing Offer which has to be used form offer calculation

SalesroomCode = request.SalesroomCode
CampaignID = request.CampaignID 
BoundOfferCode = request.BoundOfferCode 
CUID = request.CUID

If none of (BoundOfferCode, CUID ) is defined then set ResultCode = MISSING_BOUNDOFFERCODE_AND_CUID and return.
If both of (BoundOfferCode, CUID ) are defined then set CUID = NULL (i.e. the CUID is ignored and only BoundOfferCode is used in next steps).

If BoundOfferCode is defined then:
// Search marketing offers by Segment
System creates requestCMO for marketing offers (GetCustomerMarketingOfferRequest) with parameters:
- requestCMO.CUID = NULL
- requestCMO.segment = BoundOfferCode
- requestCMO.startingPriority = NULL
- requestCMO.businessChannel = NULL
- requestCMO.campaignID = CampaignID
- requestCMO.salesroomCode = SalesroomCode
- requestCMO.filterAvailableOnSalesroom = True
and sends the requestCMO via CustomerMarketingOfferWS.GetCustomerMarketingOffer (UC 02.912 Get Customer Marketing Offers)
System receives responseCMO (GetCustomerMarketingOfferResponse).
If no marketing offer found in responseCMO then set ResultCode = CAMPAIGNID_NOT_FOUND and return.
If more than one marketing offer found in responseCMO then set ResultCode = BOUNDOFFERCODE_NOT_UNIQUE, delete all records in responseCMO and return.
// End of searching by Segment

If CUID is defined:
// Read marketing offers by CUID
System creates requestCMO for marketing offers (GetCustomerMarketingOfferRequest) with parameters:
- requestCMO.CUID = CUID (if defined else NULL)
- requestCMO.segment = NULL
- requestCMO.startingPriority = NULL
- requestCMO.businessChannel = businessChannel
- requestCMO.campaignID = CampaignID
- requestCMO.salesroomCode = SalesroomCode
- requestCMO.filterAvailableOnSalesroom = True
and sends the requestCMO via CustomerMarketingOfferWS.GetCustomerMarketingOffer (UC 02.912 Get Customer Marketing Offers)
System receives responseCMO (GetCustomerMarketingOfferResponse).
{ADD PCG-2261}
If returned marketing offer has defined an entry point which is listed in globalparameter.offerStoreSkippedEntryPoints (PCG_OFS_SKIPPED_ENTRY_POINTS) remove this marketing offer.
{/ADD}
If no marketing offer found in responseCMO then set ResultCode = MOFFER_NOT_FOUND and return.
If more than one marketing offer found in responseCMO then set ResultCode = MOFFER_NOT_UNIQUE, delete all records in responseCMO and return.


Else return
- ResultCode = OK
- responseCMO

## 🔗 Connections (2)

- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Calculate/Recalculate
