---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/User Interface"
domain: "Analysis Model"
element_id: 1848540
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Product Marketing Offers

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/User Interface

## 📝 Notes

List of Product Marketing Offers available for client. 
Visible only if the list contains at least one row.

As data source is used PartyOffers.Offer response retrieved in superior UC.
Before displaying disable not available consolidation offers if not available according to the rule Disable non-available Consolidation Marketing Offers.
If global parameter FilterMarketingOffersByAvailability = TRUE, then all such disabled offers are excluded (hidden) from the grid.

Grid is initially sorted by:
- PartyOffers.Offer.priority ascending,
- Valid to ascending (if not defined then displayed in the end of the list),
- Offer Name ascending.
  
The grid is not sortable by user.
No label is displayed for the grid.

## 🔗 Connections (5)

- → Dependency: [[Check availability of offers on salesroom]]
- → Dependency: [[Product Marketing Offer Details]]
- → Dependency: [[01.010 Choose product offer (UseCase 1827711)]]
- → Dependency: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]
- → Dependency: [[Disable non-available Consolidation Marketing Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Product Marketing Offers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Choose | button |  |
| Offer Details | Product Marketing Offer Details |  |
| Info | label |  |
| Update | button |  |
