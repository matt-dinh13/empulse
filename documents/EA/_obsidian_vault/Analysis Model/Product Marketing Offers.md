---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Customer offers"
domain: "Analysis Model"
element_id: 1727254
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Product Marketing Offers

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Customer offers

## 📝 Notes

List of Product Marketing Offers available for client. 
Visible only if the list contains at least one row.

As data source is used responseCMO.CustomerMarketingOfferDataProduct (in column description referenced as CMO) / PartyOffers.Offer response retrieved in superior UC.
Before displaying disable not available consolidation offers if not available according to the rule Disable non-available Consolidation Marketing Offers.
If global parameter FilterMarketingOffersByAvailability = TRUE, then all such disabled offers are excluded (hidden) from the grid.

Grid is initially sorted by:
- CMO.offerPriority / PartyOffers.Offer.priority ascending,
- Valid to ascending (if not defined then displayed in the end of the list),
- Offer Name ascending.
  
The grid is not sortable by user.
No label is displayed for the grid.

## 🔗 Connections (1)

- → Dependency: [[Disable non-available Consolidation Marketing Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Customer offers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Choose | button |  |
| Offer Details | Product Marketing Offer Details |  |
| Info | label |  |
| Update | button |  |
