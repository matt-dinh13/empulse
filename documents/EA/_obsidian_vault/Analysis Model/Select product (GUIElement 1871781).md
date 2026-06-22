---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871781
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Select product

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Activates the 01.010 Choose product offer use case.


Visible only if all the following conditions are met:

	
- Application is in status In Pre-process and sub-status Client Draft or Approved with Cross-sell Limits (i.e. Contract.Status='P' and Contract.SubStatus in ('CF', 'ACL')).
	
- Product offer is not selected yet (i.e. Contract->Offer_Financial_Parameters[.Chosen=TRUE] does not exist).
	
- In case the application is not created remotely (Contract.Created_Remotely = FALSE), then the salesroom, where the user is currently logged in, must be the same salesroom, where the application was created (Contract.Salesroom_Code).


	
- If global parameter checkOfferInOFS = TRUE and the client has already selected product offer (TA.X-sell offer code is not null) and this offer is displayed on the contract detail (is active in Offer store)



Localization code:
APP_Select_Product

## 🔗 Connections (1)

- → Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
