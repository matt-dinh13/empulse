---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871777
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Refuse new offers

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Activates the 01.159 Reject offer use case.


Visible only if all the following conditions are met:

	
- Application is in status In Pre-process and sub-status Offers generated (i.e. Contract.Status='P' and Contract.SubStatus='POG').
or
Application is in status In Process and sub-status Offers generated (i.e. Contract.Status='P' and Contract.SubStatus='ROG').
	
- Result of the last application evaluation was Rejected (i.e. Contract->Scoring[last]->Scoring_Result.Evaluation_Result='REJ').



Localization code:
PRD_RefuseNewOffers

## 🔗 Connections (3)

- → Dependency: [[{DEL} 01.026 Continue in contract creation]]
- → Dependency: [[{MOD}01.159 Reject offer]]
- → Association «navigate»: [[Do you really want to refuse all new offers_ (Screen 1871786)]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
