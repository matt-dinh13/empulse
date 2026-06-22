---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1817940
diagrams: 2
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Is Marketing Offer available on Salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

Input:
- CUID of client
- Salesroom (optional)

// Read marketing offers
System gets the data about customer's Marketing Offers as follows:

	
- system gets active offers of the party with following parameters on the input:
   - PartyID = CUID
   - FilterOffersAvailableOnSalesroom = TRUE
   - SalesroomCode = Salesroom
Respective Marketing Offers (PartyOffers.Offer) are returned on the rule's output.

Disable not available consolidation offers according to the rule Disable non-available Consolidation Marketing Offers.

if there is at least one offer (PartyOffers.Offer) left in the respective array of customer's Marketing Offers,
then return TRUE.

Otherwise return FALSE.

## 🔗 Connections (6)

- ← Dependency: [[{MOD}01.160 Search client]]
- ← Dependency: [[{MOD}06.010 Identify Client]]
- → Dependency: [[Disable non-available Consolidation Marketing Offers]]
- → Dependency: [[Get active offers of the party (Requirement 1817943)]]
- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]
- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Business Rules - Marketing Offers
