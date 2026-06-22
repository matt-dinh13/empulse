---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN"
domain: "Analysis Model"
element_id: 1822813
diagrams: 2
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Visibility of sections in Employment information panel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN

## 📝 Notes

Section Employer visibility is based on attribute Economical_Status.Employer_required for selected economical status. Value of attribute set to:

	
- TRUE -> section visible
	
- FALSE -> section hidden


Section Employer address visibility is based on attribute Economical_Status.Employer_required for selected economical status and value of field Card delivery type:

	
- If Economical_Status.Employer_required = TRUE or Card Delivery type = "CUSTOMER_EMPLOYER" -> section visible
	
- otherwise -> section hidden

See country specific modifications:

	
- PH - Visibility of sections in Employment information panel - PH



Visibility of fields in individual section can be affected by country specific business rules: 

	
- IN - business rules

## 🔗 Connections (6)

- ← Dependency: [[Employment information]]
- ← Dependency: [[Card delivery type (GUIElement 1716428)]]
- ← Generalization: [[Visibility of sections in Employment information panel - PH]]
- → Dependency: [[Card delivery type (GUIElement 1686570)]]
- → Dependency: [[Fields visibility based on Economical status - IN]]
- ← Generalization: [[{ADD}Visibility of sections in Employment information panel - VN]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules VN
- Custom: Product business rules
