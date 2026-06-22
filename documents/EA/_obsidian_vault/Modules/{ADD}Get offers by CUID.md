---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (OFS)/Business Rules"
domain: "Modules"
element_id: 1497751
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get offers by CUID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (OFS)/Business Rules

## 📝 Notes

{ADD PCG-2225/}
// getting customer marketing offer from Offer store (OFS) by CUID

Input:
- partyID

Output:
- list of offer details

Steps:
System takes the partyID from input and gets data about offer by calling REST API provided by Offer Store module (OFS) GET PartyOffers with following input parameters:
- partyID = partyID

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
