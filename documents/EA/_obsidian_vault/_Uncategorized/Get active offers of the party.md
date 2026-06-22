---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1799954
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get active offers of the party

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes the steps, how system gets the data about the active offers of the party, that can be possibly offered via the Loan Origination channel.

Input:
- PartyID = unique identifier of the party
- FilterOffersAvailableOnSalesroom (optional, FALSE by default) = flag indicating, whether the offers not available on a specified salesroom, shall be excluded from the final array of active party offers or not
- SalesroomCode (optional) = code of the salesroom to be used for the offer filtering
- FilterOffersByEntryPoint (optional, FALSE by default) = flag indicating, whether the offers with particular non-applicable entry points shall be excluded from the final array of active party offers or not

Output:
- PartyOffers = array of active offers related to the respective party
- ErrorResult (optional) = indication of error result, when some technical issues occur during the performed steps

Steps:

	
- System takes the PartyID from the input and gets the data about the offers of corresponding party by calling the respective REST API provided by Offer Store module (i.e. GET PartyOffers) with following input parameters:
- partyId = PartyID
- acqChannelGroup = 'LOR'

If calling the service fails due to any reason, algorithm ends with no PartyOffers and respective ErrorResult returned on the output.
	
- System receives a response with an array of active PartyOffers. In case no active offers are available and such array is therefore empty, algorithm ends with no PartyOffers returned on the output.

Note: In case the Offer.possibleResponses is empty, system sets the corresponding .lastResponse attribute with a dummy value in order to mark the respective offer as fictively responded for its further processing (such dummy response is not anyhow communicated back to Offer Store system).
	
- In case the FilterOffersAvailableOnSalesroom = TRUE and SalesroomCode was provided on the input, then system takes the offers received in previous step and checks their availability on the corresponding salesroom according to the rule Check availability of offers on salesroom with following parameters on the input:
   - Offer = object(s) of respective Offer(s)
   - SalesroomCode = SalesroomCode
All offers, which are not available on such salesroom (i.e. those, for which such check returns AvailableOnSalesroom = FALSE), are then excluded from the resulting array.
	
- In case the FilterOffersByEntryPoint = TRUE was provided on the input, then system takes the remaining offers from the previous step and checks the entry point (Offer.entryPoint) for every single one of them.
If there is at least one offer with an entry point for new application creation (i.e. Offer.entryPoint in ('APPLICATION_CREATION_1SP', 'APPLICATION_CREATION_2SP')), then all offers with different entry points (i.e. Offer.entryPoint not in ('APPLICATION_CREATION_1SP', 'APPLICATION_CREATION_2SP')) are excluded from the resulting array.
	
- System takes each remaining Offer from the respective array and returns them as a result set of PartyOffers to the calling object. Algorithm ends.
