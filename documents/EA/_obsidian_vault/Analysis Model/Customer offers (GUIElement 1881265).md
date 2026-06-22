---
type: GUIElement
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model"
domain: "Analysis Model"
element_id: 1881265
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Customer offers

> **Type**: GUIElement
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model

## 📝 Notes

Panel with the list of marketing offers addressed to some particular customer.

Displayed only if:

	
- Contract is in status 'In pre-process' (sub-statuses CF, ACL, POG).
	
- If global parameter CHECK_OFFER_IN_OFS = TRUE and the client has already selected the offer (TA.X-sell offer code is not null) and this offer is active(TA.X-sell offer code=product offer identifier), only this offer is displayed.

<OR>

	
- Contract is in one of following statuses Approved ('S'), {ADD CBL-31528}Signed ('N'), Active ('A'),{/ADD} Canceled ('T').

There is no active scoring of respective customer in progress (or such scoring has not been triggered based on the underwriting decision done during the evaluation of actual application), which means:
   - Contract->External_Identifier[.Key = 'RECALC_SCORING_ID'] does not exist.
      or
   - Contract->External_Identifier[.Key = 'RECALC_SCORING_ID'] exists AND the scoring with respective identifier has already finished (i.e. RBP_Scoring[.Request_ID=External_Identifier.Value].Result is not null).
      
Column Choose for selection of an X-sell offer activates UC 01.010 Choose product offer for selected contract. 
The column is visible only if all pre-condition for this UC are fulfilled. 
Localization code for button: APP_ChooseProduct

LDM source:
// Read marketing offers
System gets the data about customer's Marketing Offers as follows:

	
- system gets active offers of the party with following parameters on the input:
   - PartyID = client's CUID
   - FilterOffersAvailableOnSalesroom = value of global parameter FilterMarketingOffersByAvailability
   - SalesroomCode = code of the salesroom, where the user is currently logged in
and displays the respective returned Marketing Offers (PartyOffers.Offer).
In case of failure (i.e. when ErrorResult is returned on the rule's output), system displays error message MSG_MarketingOfferWS_Failed.


Localization code:
MO_CustomerOffers

## 🔗 Connections (3)

- → Dependency: [[01.010 Choose product offer (UseCase 1827711)]]
- → Dependency: [[Get active offers of the party (Requirement 1817943)]]
- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Contract detail
