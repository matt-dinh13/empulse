---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules"
domain: "Analysis Model"
element_id: 1817944
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get offer data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules

## 📝 Notes

This object describes the steps, how system gets the data about the particular offer.

Input:
- OfferID = unique identifier of the offer

Output:
- Offer = object of respective offer


Steps:

	
- System takes the OfferID from the input and gets the data about the corresponding offer by calling the respective REST API provided by Offer Store module (i.e. GET Offer) with following parameters on the input:
- id = OfferID

If calling the service fails due to any reason or no offer is returned in the response, algorithm ends with no Offer returned on the output.
	
- System takes the received Offer from the response and returns it to the calling object. Algorithm ends.

## 🔗 Connections (4)

- → Dependency: [[Offer (Class 1776645)]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[{MOD}01.070 Show product offer detail]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules - Marketing Offers
