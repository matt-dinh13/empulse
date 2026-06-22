---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Validation rules"
domain: "Analysis Model"
element_id: 1584129
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Contract search criteria restrictions - common

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Validation rules

## 📝 Notes

At least one of the following rules (Rule1 - Rule6) must be met:

	
- Rule1: Contract number is mandatory
	
- Rule2: Document ID number is mandatory
	
- Rule3: Date created from is mandatory and Date created to is mandatory
	
- Rule4: At least one of (First name, Middle name, Lastname) is mandatory and Birth Date is mandatory
	
- Rule5: First name and Middle name and Lastnameis mandatory
	
- Rule6: Vin code is mandatory (Vin code length is 6 characters)

Error message: MSG_CON_CustomSearch

## 🔗 Connections (3)

- ← Dependency: [[Contract custom search criteria restrictions]]
- ← Dependency: [[Middle name (GUIElement 1822455)]]
- ← Dependency: [[VIN code]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
