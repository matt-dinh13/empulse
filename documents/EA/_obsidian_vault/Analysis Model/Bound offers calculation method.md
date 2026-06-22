---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823038
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bound offers calculation method

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Bound offer method
If xsellOfferID is sent as parameter of UC then panel is hidden.
User enters Segment code (i.e. identification of bound product offer limits) and starts searching of marketing offers.

// Read marketing offers
System creates requestCMO for marketing offers (GetCustomerMarketingOfferRequest) with parameters:
- requestCMO.CUID = NULL
- requestCMO.segment = Segment
- requestCMO.startingPriority = NULL
- requestCMO.businessChannel = NULL
- requestCMO.campaignID = NULL
- requestCMO.salesroomCode = salesroom where current user is logged on
- requestCMO.filterAvailableOnSalesroom = value of global parameter FilterMarketingOffersByAvailability
and sends the requestCMO via CustomerMarketingOfferWS.GetCustomerMarketingOffer (UC 02.912 Get Customer Marketing Offers)
System receives responseCMO (GetCustomerMarketingOfferResponse).
Columns Choose (represented by a radio button) selects Marketing Offer for calculation.

System prepares Marketing Offer Limits. 
If list does not contain any row then error message is shown (MSG_NO_RECORDS_FOUND).
Else system displays Marketing Offer Limits.

Localization code: PRD_ProductCalculatorMethodBoundProduct

## 🔗 Connections (1)

- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Bound offers calculation method
