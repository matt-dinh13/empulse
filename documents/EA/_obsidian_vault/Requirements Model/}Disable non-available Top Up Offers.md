---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9317 UI Product calculator: offer and contract selection"
domain: "Requirements Model"
element_id: 1817937
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 }Disable non-available Top Up Offers

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9317 UI Product calculator: offer and contract selection

## 📝 Notes

For each received Marketing Offer (i.e.PartyOffers.Offer):
If the Marketing Offer has assigned at least one product with top up service AND:
(user has not granted the privilege for 01.153 Display contracts for Top Up
OR
more than one product with consolidation service is assigned)
then consider the respective PartyOffers.Offer as unavailable (exclude it from the list of offers).

Continue with the next Marketing Offer.

## 🔗 Connections (1)

- ← Dependency: [[Marketing Offer Limits]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9317 UI Product calculator: offer and contract selection
