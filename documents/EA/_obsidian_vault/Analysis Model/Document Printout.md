---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Document printouts"
domain: "Analysis Model"
element_id: 1638406
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Document printout

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Document printouts

## 📝 Notes

Panel containing the detailed information about the document printout files associated with any application's:

	
- application document,
	
- client document,
	
- DDM document.


Separate instance of the panel is displayed for each relevant document.

LDM source:

	
- Contract->Contract_Document->Document //For application documents.
	
- Contract->Deal->Client_Snapshot->Client_Document->Document //For client documents.
	
- Contract->DDM->DDM_Document->Document //For DDM documents.


Localization code: none

## 📊 Appears In (1 diagrams)

- Custom: Tab - Document printouts
