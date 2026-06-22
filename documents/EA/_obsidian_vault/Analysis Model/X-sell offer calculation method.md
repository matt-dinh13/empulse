---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823081
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ X-sell offer calculation method

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

X-sell method
If client is not identified then panel is hidden.

// Read marketing offers
System gets the data about customer's Marketing Offers as follows:

	
- system gets active offers of the party with following parameters on the input:
   - PartyID = client's CUID
   - FilterOffersAvailableOnSalesroom = value of global parameter FilterMarketingOffersByAvailability
   - SalesroomCode = code of the salesroom, where the user is currently logged in
and displays the respective returned Marketing Offers (PartyOffers.Offer).
In case of failure (i.e. when ErrorResult is returned on the rule's output), system displays error message MSG_MarketingOfferWS_Failed.

Columns Choose (represented by a radio buttons) selects the Marketing Offer for calculation.
If xsellOfferID is sent as a parameter of the superior use case, then:
- corresponding row is chosen 
- the other (not chosen) rows are hidden.

Localization code:
PRD_ProductCalculatorMethodXSell

## 🔗 Connections (2)

- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]
- → Dependency: [[Get active offers of the party (Requirement 1817943)]]

## 📊 Appears In (1 diagrams)

- Custom: X-sell offers calculation method
