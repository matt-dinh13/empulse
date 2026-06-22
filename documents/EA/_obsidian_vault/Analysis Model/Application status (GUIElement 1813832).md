---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813832
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Application status

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Status of the application and timestamp (date & time) of the respective status transition.
Note: Timestamp of the status transition is placed in the parenthesis, e.g. 'Approved (01/01/2000 12:00)'.

LDM source:

	
- Contract.Status //For application status part.
	
- Contract->Contract_Status_Transition[.Status=Contract.Status].Creation_Date //For application status transition timestamp part.


Localization code:
APP_Status

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
