---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871783
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Send to evaluation

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Invokes the Pre-finalization part of the 01.080 Fill in application use case.


Visible only if all the following conditions are met:

	
- Application is in status In Pre-process and sub-status Approved with Cross-sell Limits (i.e. Contract.Status='P' and Contract.SubStatus='ACL').
	
- Some product offer is already selected (i.e. Contract->Offer_Financial_Parameters[.Chosen=TRUE] exists).



Localization code:
APP_Send

## 🔗 Connections (1)

- → Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
