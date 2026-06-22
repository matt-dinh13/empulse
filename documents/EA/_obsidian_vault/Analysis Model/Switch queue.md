---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF"
domain: "Analysis Model"
element_id: 1182002
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Switch queue

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF

## 📝 Notes

Switches the contract between FO/BO queues (for now only these two options).

Visible only if :

	
- the user can process contract in 2BoD queue (meets conditions Process contracts in 2BoD queue)


	
- pre-conditions of 01.027 Reschedule 2BoD call are met


Localization code:
APP_2BODSwitch

## 🔗 Connections (2)

- → Dependency: [[01.027 Switch contract 2BoD queue type (UseCase 1736424)]]
- → Association «navigate»: [[Switch contract to _Front_Back_ Office.]]

## 📊 Appears In (1 diagrams)

- Custom: Queue control panel - product AF
