---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface"
domain: "Modules"
element_id: 1732660
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 List of Marketing Product Offers

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface

## 📝 Notes

List of Marketing Product Offers available for client. 

	
- Visible only if the list contains at least one row.


Data for grid are taken from response (GetCustomerMarketingOfferResponse, see UC 02.906 Marketing Offers Management) where response.CustomerMarketingOffer.offerType = PRODUCT.

Grid is initially sorted by 
{ADD PCG-2356}If GlobalParameter.MarketingOfferSortByPriority (PCG_MOFFER_SORT_BY_PRIORITY) = True then 
- Priority ascending 
- Maximal Credit Amount descending (if not defined then displayed at the end of the list)
- Offer Name ascending
else {/ADD}
- Maximal Credit Amount descending (if not defined then displayed at the end of the list)
- Offer Name ascending
The grid is not sortable by user.

Localization: MO_ProductOfferList

## 🔗 Connections (3)

- → Dependency: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]
- → Dependency: [[01.010 Choose product offer (UseCase 1827711)]]
- → Dependency: [[Get set of Business Product Types]]

## 📊 Appears In (1 diagrams)

- Custom: Marketing offers management (SAS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Choose | button |  |
| Offer Details | Product Marketing Offer Details |  |
| Response | {DEL}Marketing Offer Response  |  |
| Update | button |  |
