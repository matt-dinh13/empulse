---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820880
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Curr.

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Currency of the direct debit mandate's transaction limit.

Not editable - read only.

LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Limit_Currency
or
GetDDMResponse.ddmData.limit.currency


	
- //LDM for value saving
Contract->DDM.Limit_Currency
or
CreateDDMDraftRequest.limit.currency/ 
UpdateDDMOrDraftRequest.limit.currency


Localization code: none

## 🔗 Connections (2)

- ← Generalization: [[Curr. (GUIElement 1820873)]]
- ← Generalization: [[Curr. (GUIElement 1820864)]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
