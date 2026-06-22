---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820883
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Existing DDM

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

{ADD LOR-10271/}
List of existing DDM, recieved from external system.

Other:

	
- Visible only if switch enableDDMSourceAndType = true.
	
- Enabled if Source = Existing
	
- Each item is represented by string "Bank Name, Bank Account Number (masked), Bank Account Holder Name"
	
- System affects other DDM field, based on selected value. See Selecting source of DDM


Localization code:
DDM_EXISTING

## 🔗 Connections (1)

- ← Generalization: [[{ADD}Existing DDM (GUIElement 1820869)]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
