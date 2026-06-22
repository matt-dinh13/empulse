---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871797
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Refresh evaluation

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

For the detailed logic behind this button, see the 01.210 Show contract detail use case.


Visible only if all the following conditions are met:

	
- Application is being actually evaluated - i.e. it is in one of the following combinations of status and sub-status:
   - Status In Pre-process and sub-status CIF Waiting, CIF Manual, CIF Identified, LAP Waiting or Draft (i.e. Contract.Status='P' and Contract.SubStatus in ('PCW', 'PCM', 'PCI', 'PLW', 'PDRAFT')).
   - Status In Process and sub-status CIF Waiting, CIF Manual, CIF Identified, LAP Waiting or LAP Waiting after Offers (i.e. Contract.Status='R' and Contract.SubStatus in ('RCW',  'RCM',  'RCI',  'RLW',  'RLWO')).
	
- Application is currently not in a 2BoD filling queue (i.e. negative result is returned by the Algorithm: Check if contract is currently in 2BoD queue).



Localization code:
CON_RefreshEvaluation

## 🔗 Connections (1)

- → Dependency: [[Algorithm_ Check if contract is currently in 2BoD queue]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
