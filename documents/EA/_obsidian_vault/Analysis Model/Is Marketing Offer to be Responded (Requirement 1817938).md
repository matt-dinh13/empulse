---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules"
domain: "Analysis Model"
element_id: 1817938
diagrams: 2
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Is Marketing Offer to be Responded

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules

## 📝 Notes

Input:

	
- CUID - client's unique identifier
	
- Salesroom (optional) - salesroom current user is assigned to
	
- FilterUnresponded - indication (boolean), whether the marketing offers with registered response shall be taken into account during the rule's evaluation or not


// Read marketing offers
System gets the data about customer's Marketing Offers as follows:

	
- system gets active offers of the party with following parameters on the input:
   - PartyID = CUID
   - FilterOffersAvailableOnSalesroom = TRUE
   - SalesroomCode = Salesroom
Respective Marketing Offers (PartyOffers.Offer) are returned on the rule's output.


If one of the following conditions is met, then return TRUE:

	
- FilterUnresponded = FALSE and at least one Marketing Offer was received (i.e. any PartyOffers.Offer exists).
	
- FilterUnresponded = TRUE and at least one Marketing Offer without a registered response was received (i.e. any PartyOffers.Offer where .lastResponse is null exists).

Otherwise return FALSE.

## 🔗 Connections (5)

- ← Dependency: [[Marketing Offer available info]]
- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]
- → Dependency: [[Get active offers of the party (Requirement 1817943)]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules - Marketing Offers
- Use Case: Fill in application
