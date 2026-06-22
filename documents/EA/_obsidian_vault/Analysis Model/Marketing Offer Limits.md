---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1848537
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Marketing Offer Limits

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

List of Marketing Offer Limits available for the client. 
Visible only if the list contains at least one row.

As data source is used responseCMO.CustomerMarketingOfferDataProduct (in column description referenced as CMO) PartyOffers.Offer response retrieved in superior UC.
Before displaying disable:

	
- not available consolidation offers if not available according to the rule Disable non-available Consolidation Marketing Offers
	
- Not available top up offers if not available according to the rule Disable non-available Top Up Offers

If global parameter FilterMarketingOffersByAvailability = TRUE, then all such disabled offers are excluded (hidden) from the grid.

Grid is initially sorted by:
- Valid to ascending (if not defined then displayed in the end of the list),
- Offer Name ascending.
  
The grid is not sortable by user.
No label is displayed for the grid.

## 🔗 Connections (5)

- → Dependency: [[}Disable non-available Top Up Offers]]
- → Dependency: [[Disable non-available Consolidation Marketing Offers]]
- → Dependency: [[Get Product Type of Marketing Offer]]
- → Dependency: [[Get set of Business Product Types]]
- → Dependency: [[Check availability of offers on salesroom]]

## 📊 Appears In (3 diagrams)

- Custom: Bound offers calculation method
- Custom: Marketing Offer Limits
- Custom: X-sell offers calculation method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Choose | button |  |
| Offer Name | text |  |
| {MOD}Product type | string |  |
| Maximal credit amount | FinancialAmount |  |
| Maximal monthly installment | FinancialAmount |  |
| Minimal cash payment | FinancialAmount |  |
| Valid to | date |  |
| Minimal cash payment rate | number |  |
