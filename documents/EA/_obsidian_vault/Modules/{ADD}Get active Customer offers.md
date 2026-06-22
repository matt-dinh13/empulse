---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Business Rules"
domain: "Modules"
element_id: 1799955
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get active Customer offers

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Business Rules

## 📝 Notes

{ADD CLM-3701/} -- taken from the original LOR function Get active offers of the party; created for CLM usage only!
This rule describes steps to getting the data about the active offers of the customer (party), that can be possibly offered via the defined channel.

Input:
- PartyID = CUID (unique identifier of the party)
- FilterOffersAvailableOnSalesroom (optional, FALSE by default) = flag indicating, whether the offers not available on a specified salesroom, shall be excluded from the final list of active party offers or not
- SalesroomCode (optional) = code of the salesroom to be used for the offer filtering
- FilterOffersByEntryPoint (optional, FALSE by default) = flag indicating, whether the offers with particular non-applicable entry points is excluded from the final array of active party offers or not

Output:
- PartyOffers = array of active offers related to the respective customer
- ErrorResult (optional) = indication of error result, when some technical issues occur during the performed steps

Steps:

	
- System calls REST API provided by OfferStore module (i.e. GET .../offers/partyId/{partyId}) with following input parameters:
- partyId = PartyID
- acqChannelGroup = 'LOR'
	
- If the calling fails due to any reason, respective ErrorResult is returned on the output and the rule ends
	
- System receives a response with an array of active PartyOffers. If no active offers are available rule ends
	
- If the FilterOffersAvailableOnSalesroom = TRUE and SalesroomCode was provided on the input, then system takes the offers received in previous step and checks their availability on the corresponding salesroom according to the rule Check Customer offers availability on Salesroom with following parameters:
   - Offer = object(s) of respective Offer(s)
   - SalesroomCode = SalesroomCode
All offers, which are not available on such salesroom (i.e. those, for which such check returns AvailableOnSalesroom = FALSE), are then excluded from the resulting array.
	
- If the FilterOffersByEntryPoint = TRUE, system takes the remaining offers from the previous step and checks the entry point (Offer.entryPoint) for every single one of them.
If there is at least one offer with an entry point allowing the new application creation (i.e. Offer.entryPoint in ('APPLICATION_CREATION_1SP', 'APPLICATION_CREATION_2SP')), then all scoring offers (i.e. Offer.entryPoint = 'SCORING') are excluded from the resulting array.
	
- System takes each remaining Offer from the respective array and returns them as a result set of PartyOffers to the calling object. Algorithm ends.

## 🔗 Connections (2)

- → Dependency: [[{ADD}Check Customer offers availability on Salesroom]]
- ← Dependency: [[Is Marketing Offer to be Responded]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Client Management
