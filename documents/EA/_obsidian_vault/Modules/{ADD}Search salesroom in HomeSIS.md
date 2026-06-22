---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API/Business Rules"
domain: "Modules"
element_id: 1873202
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Search salesroom in HomeSIS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API/Business Rules

## 📝 Notes

{ADD PCG-5594}
For country: PH

Endpoint: GET https://{hsisUrl}/homesis/restful/salesrooms/search

Salesrooms can be found by given input data/criteria - parameter "filter".
Examples and logic for using query parameter "filter" is described below:

Search data to API param:
Salesroom Code:
Input: Salesroom Code(s),
filter = code|in|salesroomCode1,salesroomCode2,salesroomCode3


Partner Data:
Input: Partner Code(s), filter = partnerCode|in|partner1,partner2,partner3
Input: Partner Name(s), filter = partnerName|in|partnerName1,partnerName2,partnerName3


Combination, Partner + Product:
Input: Salesroom Code(s) + Partner Code(s), 2 API calls:
- filter = code|in|salesroom1,salesroom2,salesroom3
- filter = partnerCode|in|partner1,partner2,partner3

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Salesrooms search]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: PCG-5594 CBL-30020 BRPH-2306 - Product Assignment Governance - PH - ANA - HoSel - Product Catalog
- Logical: HomeSIS API
