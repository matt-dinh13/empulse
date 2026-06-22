---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product"
domain: "Analysis Model"
element_id: 1787155
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Total number of related persons

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product

## 📝 Notes

Number of related persons (where Remitter = false) on the Application must be:

	
- >= Application Form Parameters.MinNumberOfRelatedPersons
	
- <= Application Form Parameters.MaxNumberOfRelatedPersons

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Application validation rule-PH]]
- ← Dependency: [[Application validation rule-VN]]
- ← Dependency: [[Total number of related persons (Action 1787168)]]

## 📊 Appears In (3 diagrams)

- Custom: Product validation
- Custom: Validation rules - PH
- Custom: Validation rules-VN
