---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (OFS)/Business Rules"
domain: "Modules"
element_id: 1497750
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get offer by ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (OFS)/Business Rules

## 📝 Notes

{ADD PCG-2225/}
// getting customer marketing offer from Offer store (OFS) by ID

Input:
- ID - UUID of the offer in format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

Output:
- offerDetail - data of customer marketing offer

Steps:
System takes the ID from input and gets data about offer by calling REST API provided by Offer Store module (OFS) GET Offer with following input parameters:
- id = id

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
