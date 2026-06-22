---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871782
diagrams: 1
connections: 5
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancel application

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Activates one of the following use cases based on the actual status of the respective application (see the preconditions of particular use cases for more details):

	
- 01.325 Cancel In Pre-Process or In Process contract manually
	
- 01.340 Cancel contract with generated offers manually
	
- 01.320 Cancel approved contract manually



Visibility:
For draft applications already added into the FO or BO application filling queue (i.e. Contract[.Status='P' and .SubStatus='PDRAFT']->Application_Filling_Queue[.Filling_Group in ('FO', 'BO')] exists), this button is visible only if the user can process the respective application according to the rule Process contracts in 2BoD queue (from contract detail).


Localization code:
APP_Cancel

## 🔗 Connections (4)

- → Dependency: [[01.325 Cancel In Pre-Process or In Process contract manually (UseCase 1850515)]]
- → Dependency: [[Process contracts in 2BoD queue (from contract detail)]]
- → Dependency: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- → Dependency: [[01.340 Cancel contract with generated offers manually (UseCase 1850505)]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
