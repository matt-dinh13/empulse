---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7136 (CLM-2381) Redesign Client detail - Marketing Offer tab"
domain: "Requirements Model"
element_id: 1451520
diagrams: 1
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Redesign Customer offer tab on the Client detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7136 (CLM-2381) Redesign Client detail - Marketing Offer tab

## 📝 Notes

Goal of this task is to create a new Customer offers tab (Client detail form) where some additional functions of the current Marketing offer management screen is available. The tab will be only available if OfferStore component is active otherwise the current behaviour is used.

OfferStore API used in the task:
see the swagger description under e.g. https://ofs.in00a1.cz.infra/ofs/
Used endpoints:
- getting offers for a client -> GET .../offers/partyId/{partyId} (offer-controller)
- posting a response to an offer -> POST .../responses/ (administration-related endpoint);
- getting the last offer response -> GET .../offers/{offerId}/responses (administration-related endpoints)

## 📊 Appears In (1 diagrams)

- Custom: CBL-7136 (CLM-2381) Redesign Client detail - Marketing Offer tab
