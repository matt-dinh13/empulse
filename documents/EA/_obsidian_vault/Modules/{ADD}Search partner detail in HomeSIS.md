---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API/Business Rules"
domain: "Modules"
element_id: 1873207
diagrams: 2
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Search partner detail in HomeSIS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API/Business Rules

## 📝 Notes

{ADD PCG-5594}
For country: PH

Endpoint: GET https://{hsisUrl}/homesis/restful/partners/search

Partners can be found and details returned by given input data/criteria - parameter "filter".
Examples and logic for using query parameter "filter" is described below:

Search data to API param:
Partner Code:
Input: Partner Code(s),
filter = code|in|partnerCode1,parnterCode2,partnerCode3

API can handle multiple Partner Codes on input, returning details for all of them in output.

Partner Data:
Input: Partner Code(s), filter = partnerCode|in|partner1,partner2,partner3
Input: Partner Name(s), filter = partnerName|in|partnerName1,partnerName2,partnerName3

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5594 CBL-30020 BRPH-2306 - Product Assignment Governance - PH - ANA - HoSel - Product Catalog
