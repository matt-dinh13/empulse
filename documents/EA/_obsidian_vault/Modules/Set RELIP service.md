---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1279965
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Set RELIP service 

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

Displayed only for SERVICE.ServiceType = RELIP (REL transaction Installment Plan) 
Before saving the data are checked according to rule RELIP Service - validation rules. 

Rules for entering of dependent values (see RELIP Service Allowed Combination) in combo boxes:

	
- Installment Plan Method –  full list in combo, after change of selected value clear Installment Rounding Method, Installment Rounding Scale, Due Day Method, Day Count Method
	
- Due Day Method  –  list in combo is filtered by selected Installment Plan Method (see rule Day Count Method - validation rules)
	
- Installment Rounding Method  –  list in combo is filtered by selected Installment Plan Method, after change of selected value clear Installment Rounding Scale, Due Day Method
	
- Installment Rounding Scale  –  list in combo is filtered by selected Installment Plan Method + Installment Rounding Method, after change of selected value clear Due Day Method
	
- Due Day Method  –  list in combo is filtered by selected Installment Plan Method + Installment Rounding Method + Installment Rounding Scale

User has to enter the fields in mentioned order otherwise the dependent combos are empty.

## 🔗 Connections (2)

- → Dependency: [[RELIP Service - allowed combination rules]]
- → Dependency: [[RELIP Service - validation rules]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP service 
