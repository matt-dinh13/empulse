---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface"
domain: "Modules"
element_id: 1732657
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 List of Marketing Non-Product Offers

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface

## 📝 Notes

List of Marketing Non-Product Offers available for client. 

	
- Visible only if the list contains at least one row.


Data for grid are taken from response (GetCustomerMarketingOfferResponse, see UC 02.906 Marketing Offers Management) where response.CustomerMarketingOffer.offerType = NON_PRODUCT.

Grid is initially sorted by response.CustomerMarketingOffer.offerID ascending.
The grid is not sortable by user.

Localization: MO_NonProductOfferList

## 📊 Appears In (1 diagrams)

- Custom: Marketing offers management (SAS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Message | string |  |
| Response | panel |  |
