---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF"
domain: "Analysis Model"
element_id: 1182003
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reschedule

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF

## 📝 Notes

Reschedule call to client.
Visible only if :

	
- the user can process contract in 2BoD queue (meets conditions in Process contracts in 2BoD queue) and 


	
- pre-conditions of 01.032 Reschedule 2BoD call are met


Localization code:
APP_2BODReschedule

## 🔗 Connections (2)

- → Dependency: [[01.032 Reschedule 2BoD call (UseCase 1736428)]]
- → Association «navigate»: [[Reschedule call]]

## 📊 Appears In (1 diagrams)

- Custom: Queue control panel - product AF
