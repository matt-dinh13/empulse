---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822792
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Main source of income values

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

This rule describes visibility of field Main source of income in dependency on selected Economical status.
When economical status is selected, system selects values of source of income based on setting in table Source Of Income to Economical Status following way:

	
- Economical status = selected economical status
	
- Specific for
= DBS - if related offer is offered in cooperation with joint lender DBS
= DEFAULT - if related offer is not offered in cooperation with joint lender DBS
= empty - always

## 🔗 Connections (3)

- ← Dependency: [[Main source of income]]
- → Dependency: [[Economical status (GUIElement 1738733)]]
- → Dependency: [[Source Of Income to Economical Status]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
