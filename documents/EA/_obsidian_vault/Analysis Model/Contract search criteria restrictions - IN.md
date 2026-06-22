---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Validation rules"
domain: "Analysis Model"
element_id: 793580
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contract search criteria restrictions - IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Validation rules

## 📝 Notes

At least one of the following rules (Rule1 - Rule6) must be met:

	
- Rule1: Contract number is mandatory
	
- Rule2: Document ID number is mandatory
	
- Rule3: Date created from is mandatory and Date created to is mandatory
	
- Rule4: Birth Date is mandatory


	
- Rule5: First name and Middle name and Surname is mandatory
	
- Rule6: Vin code is mandatory (Vin code length is 6 characters)

Error message: MSG_CON_CustomSearch

## 🔗 Connections (1)

- ← Dependency: [[Contract custom search criteria restrictions]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
