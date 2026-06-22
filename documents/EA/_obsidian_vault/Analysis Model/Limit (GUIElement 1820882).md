---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820882
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Limit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Amount of the direct debit mandate's transaction limit.

Other:

	
- Editable for Create DDM scenario (i.e. 01.421 Create application DDM).
	
- Not editable - read only for Update DDM scenario (i.e. 01.422 Update application DDM).
	
- When user enters any value manually and moves the focus out of this field, radio buttons Monthly Installment, Credit amount and Same as last DDM are all automatically unticked.


LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Limit_Amount
or
GetDDMResponse.ddmData.limit.amount


	
- //LDM for value saving
Contract->DDM.Limit_Amount
or
CreateDDMDraftRequest.limit.amount / 
UpdateDDMOrDraftRequest.limit.amount


Localization code:
GEN_Limit

## 🔗 Connections (3)

- → Dependency: [[Mandatory if editable (Action 1789808)]]
- ← Generalization: [[Limit (GUIElement 1820868)]]
- ← Generalization: [[Limit (GUIElement 1820865)]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
