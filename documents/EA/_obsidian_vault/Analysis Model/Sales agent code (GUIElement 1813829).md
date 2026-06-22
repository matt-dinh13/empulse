---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813829
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Sales agent code

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Code of the user, who arranged the application.

Note: In case the user, who submitted the application for pre-approval/approval, is a different user than the one, who arranged it, code of such user is placed in the brackets and shown as well along with the MSG_SALES_AGENT_CODE_Tooltip message in a tooltip (see the rule Displaying tooltips), e.g. 'USER_WHO_ARRANGED (USER_WHO_SUBMITTED_FOR_APPROVAL)'.

LDM source:
Contract->Business_Event[.Type='ARRANGE_APPLICATION'].Originator->User.Employee_Number //For user, who arranged the application.

	
- Contract->Business_Event[.Type='SUBMIT_PRE'].Originator->User.Employee_Number //For user, who submitted the application for pre-approval.
	
- Contract->Business_Event[.Type='CREATE_CONTRACT'].Originator->User.Employee_Number //For user, who submitted the application for approval.


Localization code:
SAL_SalesAgentCode

## 🔗 Connections (1)

- → Dependency: [[Displaying tooltips]]

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
