---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848508
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Select product

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

This button invokes UC 01.010 Choose product offer.

The button is displayed only if following conditions are fulfilled:

	
- the user has appropriate access rights for given use case
	
- if Contract.Created remotely = false, then the salesroom saved on the contract must equal to the salesroom to which is the user currently assigned
	
- contract is substatus CF (client draft) or ACL (Approved with cross-sell limits)
	
- product is not selected yet
	
- global parameter CHECK_OFFER_IN_OFS=true and the client has already selected product offer (TA.X-sell offer code is not null) and this offer is displayed on the contract detail (is active in Offer store)


The button is disabled if:
- cannot get data about applicant from PIF and ProductCalculatorParameters.MobilePhone1 = True{/ADD}

Preconditions of particular use case has to be fulfilled as well.

Localization code: APP_Select_Product

## 🔗 Connections (1)

- → Realisation: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
