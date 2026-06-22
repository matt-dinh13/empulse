---
type: Requirement
stereotype: "Display"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627482
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Selection of process type and 2BoD filling

> **Type**: Requirement · **Stereotype**: «Display»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Rules for selection of process type and 2BoD filling:

	
- Field "Allowed process type" is visible with no pre-selected value. The field is mandatory.


	
- Field "Filling of second block of data" is hidden.


	
- When value '2SP' or value '1and2P' is selected in "Allowed process type", the field "Filling of second block of data" becomes visible, non-pre-filled and mandatory.
	
- When value of "Allowed process type" is changed to "1SP", the field "Filling of second block of data" stays hiden and is not taken into account.

## 🔗 Connections (4)

- ← Dependency: [[09.230 Update salesroom (UseCase 1387396)]]
- ← Dependency: [[09.220 Create salesroom (UseCase 1387390)]]
- ← Dependency: [[Filling of second block of data (GUIElement 1572175)]]
- ← Dependency: [[Allowed process type (GUIElement 1572168)]]

## 📊 Appears In (2 diagrams)

- Custom: Salesroom Management -  business Rules
- Use Case: Manage salesroom
