---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH"
domain: "Analysis Model"
element_id: 1814006
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Visibility of sections in Employment information panel - PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH

## 📝 Notes

Section Employer address visibility is based on attribute Economical_Status.Employer_required for selected economical status and value of field Card delivery type:

	
- Economical_Status.Employer_required = TRUE and Card Delivery type <> "CUSTOMER_EMPLOYER" -> panel, defined in application form, is visible
	
- Economical_Status.Employer_required = TRUE and Card Delivery type = "CUSTOMER_EMPLOYER" -> full version of Address panel is visible


	
- otherwise -> section hidden

## 🔗 Connections (2)

- ← Dependency: [[Card delivery type (GUIElement 1653032)]]
- → Generalization: [[Visibility of sections in Employment information panel]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules - PH
- Custom: Employer address PH
