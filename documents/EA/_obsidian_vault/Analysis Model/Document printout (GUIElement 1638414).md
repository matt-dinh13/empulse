---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Document printouts"
domain: "Analysis Model"
element_id: 1638414
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Document printout

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Document printouts

## 📝 Notes

Panel containing the detailed information about the document printout files associated with any contract's:

	
- contract document,
	
- client document,
	
- DDM document,
	
- ER document.


Separate instance of the panel is displayed for each relevant document.

LDM source:

	
- Contract->Contract_Document->Document //For contract documents.
	
- Contract->Deal->Client_Snapshot->Client_Document->Document //For client documents.
	
- Contract->DDM->DDM_Document->Document //For DDM documents.
	
- Contract->Contract_Service->Loan_Service_Request->Loan_Service_Request_Document->Document //For ER documents.


Localization code: none

## 📊 Appears In (1 diagrams)

- Custom: Tab-Document Printouts
