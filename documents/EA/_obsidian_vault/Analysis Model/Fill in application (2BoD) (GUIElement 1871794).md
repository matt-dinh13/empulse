---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871794
diagrams: 1
connections: 7
tags:
  - guielement
  - analysis-model
---

# 🖥️ Fill in application (2BoD)

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Activates the 01.083 Fill in application - 2BoD use case.


Visible only if all the following conditions are met:

	
- Application is in status In Pre-process (i.e. Contract.Status='P').
	
- Application is in sub-status Draft (i.e. Contract.SubStatus='PDRAFT').
or
Application is in sub-status Approved with Cross-sell Limits (i.e. Contract.SubStatus='ACL') and such application was already sent to preliminary evaluation before (i.e. Contract->Scoring[.Evaluation_Request_Type='PRELIM'] exists) and some product offer is already selected (i.e. Contract->Offer_Financial_Parameters[.Chosen=TRUE] exists).


	
- Application is currently in a 2BoD filling queue (i.e. positive result is returned by the Algorithm: Check if contract is currently in 2BoD queue) and the user has privileges to process the applications from a 2BoD filling queue of the respective type (i.e. user meets the conditions described in Process contracts in 2BoD queue (from contract detail) evaluated against the respective filling queue type retrieved according to the Algorithm: Find which 2BoD queue type is a contract in) and such application is currently not assigned to any other user (i.e. no user or current user is returned by the Algorithm: Find user assigned to contract in 2BoD queue).
or
Application is currently not in a 2BoD filling queue (i.e. negative result is returned by the Algorithm: Check if contract is currently in 2BoD queue).


Other:
In case the application's 2BoD is required to be filled in strictly via online channel only (i.e. Contract->Application_Filling_Queue.Filling_Channel = 'ONLINE'), then this button is disabled and message MSG_OnlineFillingChannelRequired is displayed in a tooltip (see the rule Displaying tooltips).


Localization code:
APP_FillInApplication

## 🔗 Connections (6)

- → Dependency: [[Process contracts in 2BoD queue (from contract detail)]]
- → Dependency: [[Algorithm_ Check if contract is currently in 2BoD queue]]
- → Dependency: [[Algorithm_ Find which 2BoD queue type is a contract in]]
- → Dependency: [[Displaying tooltips]]
- → Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- → Dependency: [[Algorithm_ Find user assigned to contract in 2BoD queue]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
