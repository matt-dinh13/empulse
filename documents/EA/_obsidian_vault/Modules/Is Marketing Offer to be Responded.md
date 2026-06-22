---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/UseCase Model"
domain: "Modules"
element_id: 1799956
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Is Marketing Offer to be Responded

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/UseCase Model

## 📝 Notes

Input:

	
- CUID - client's unique identifier
	
- Salesroom (optional) - salesroom current user is assigned to
	
- FilterUnresponded - indication (boolean), whether the marketing offers with registered response shall be taken into account during the rule's evaluation or not


If global parameters IsSAS = FALSE and IsOfferStore = FALSE, return FALSE.

// Read marketing offers
System gets the data about customer's Marketing Offers based on the value of global parameter IsOfferStore as follows:

	
- If TRUE, then system gets active offers of the party with following parameters on the input:
   - PartyID = CUID
   - FilterOffersAvailableOnSalesroom = TRUE
   - SalesroomCode = Salesroom
Respective Marketing Offers (PartyOffers.Offer) are returned on the rule's output.
	
- Otherwise system creates requestCMO for marketing offers (GetCustomerMarketingOfferRequest) with parameters:
- requestCMO.CUID = CUID from the input
- requestCMO.segment = NULL
- requestCMO.startingPriority = NULL
- requestCMO.businessChannel = BusinessChannel (see superior UC)
- requestCMO.campaignID = CampaignID (see superior UC)
- requestCMO.salesroomCode = Salesroom from the input
- requestCMO.filterAvailableOnSalesroom = TRUE
- requestCMO.filterNonBlocked = TRUE
and sends the requestCMO via CustomerMarketingOfferWS.GetCustomerMarketingOffer (UC 02.912 Get Customer Marketing Offers)
System receives responseCMO (GetCustomerMarketingOfferResponse).


If one of the following conditions is met, then return TRUE:

	
- FilterUnresponded = FALSE and at least one Marketing Offer was received (i.e. any responseCMO.CustomerMarketingOffer / PartyOffers.Offer exists).
	
- FilterUnresponded = TRUE and at least one Marketing Offer without a registered response was received (i.e. any responseCMO.CustomerMarketingOffer where .responseCode is null / PartyOffers.Offer where .lastResponse is null exists).

Otherwise return FALSE.

## 🔗 Connections (2)

- → Dependency: [[{ADD}Get active Customer offers]]
- ← Dependency: [[{MOD}06.030 Show Client Data (UseCase 1878935)]]

## 📊 Appears In (1 diagrams)

- Use Case: Client Management
