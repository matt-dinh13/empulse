---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF"
domain: "Analysis Model"
element_id: 1182001
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancel contract

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Queue control panel - product AF

## 📝 Notes

Cancels the processed contract.
Visible only if :

	
- the user can process contract in 2BoD queue (meets conditions in Process contracts in 2BoD queue) and 
	
- pre-conditions of 01.325 Cancel draft contract manually are met


Localization code:
CON_Cancel

## 🔗 Connections (1)

- → Dependency: [[01.325 Cancel In Pre-Process or In Process contract manually (UseCase 1850515)]]

## 📊 Appears In (1 diagrams)

- Custom: Queue control panel - product AF
