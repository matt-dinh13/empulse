---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH"
domain: "Analysis Model"
element_id: 1814005
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Visibility of permanent address fields - PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH

## 📝 Notes

Fields of Permanent address visibility is based on value of field Card delivery type:

	
- Card Delivery type = "CUSTOMER_PERMANENT" -> full address visible
	
- otherwise -> short address visible

## 🔗 Connections (3)

- ← Dependency: [[Secondary contact address PH (GUIElement 1351537)]]
- ← Dependency: [[Card delivery type (GUIElement 1653032)]]
- → Generalization: [[Visibility of permanent address fields]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules - PH
- Custom: Secondary contact address PH
