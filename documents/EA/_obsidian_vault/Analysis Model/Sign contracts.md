---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818381
diagrams: 1
connections: 2
tags:
  - screen
  - analysis-model
---

# 📱 Sign contracts

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Screen for signing the contract / multiple contracts of the client at once.
System finds all applications meeting the following conditions (relatively to the currently processed application) and displays a separate Sign contracts panel for each one of them (including the currently processed application):

	
- Application is in status Approved ('S').
	
- Application is created for the same client.
	
- Application is created within the same day.
	
- Application is created on the same salesroom (defined by Contract->Business_Event[.Type='CREATE_CONTRACT'].Salesroom_Code)


Note: If calling the CardInfoWS.GetCards method fails for any of the applicable applications, then such application is excluded from the list (i.e. is not displayed on the screen).

If there are multiple applications to be displayed (based on the above mentioned conditions), then the application, from whose detail this screen was opened, is displayed as the very first one on top of the screen.

Localization code:
CON_MultiSign

## 🔗 Connections (1)

- → Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
