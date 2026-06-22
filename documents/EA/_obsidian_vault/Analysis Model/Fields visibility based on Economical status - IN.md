---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN"
domain: "Analysis Model"
element_id: 1686094
diagrams: 1
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Fields visibility based on Economical status - IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN

## 📝 Notes

This rule describes  visibility of fields in dependency on economical status.
Note: Economical status = "SALARIED" (= "SALARIED_GOVT" or "SALARIED_OTHER")

Following fields are visible for related economical statuses:

	
- Type of employment - "SALARIED"
	
- Department - "SALARIED"
	
- Employer's industry - "SALARIED" or "SELFEMPLOYED"
	
- University course - "STUDENT"
	
- Employer/University name - "SALARIED" , "SELFEMPLOYED" or "STUDENT"
	
- Profession - "SALARIED" or "SELFEMPLOYED"
	
- Employer/University phone - "SALARIED" , "SELFEMPLOYED" or "STUDENT"
	
- Residence cum office - "SELFEMPLOYED"


Following fields are hidden for related economical statuses:

	
- Salary day (DD) - "STUDENT"
	
- Salary payment method - "STUDENT"

## 🔗 Connections (9)

- ← Dependency: [[Profession (GUIElement 1107630)]]
- ← Dependency: [[Employer industry]]
- ← Dependency: [[Department and Designation]]
- ← Dependency: [[University course]]
- ← Dependency: [[Type of employment (GUIElement 1107637)]]
- ← Dependency: [[Residence cum office (GUIElement 1163825)]]
- ← Dependency: [[Salary payment method (GUIElement 1773249)]]
- ← Dependency: [[Salary day (DD)]]
- ← Dependency: [[Visibility of sections in Employment information panel]]

## 📊 Appears In (1 diagrams)

- Custom: IN - Business rules
