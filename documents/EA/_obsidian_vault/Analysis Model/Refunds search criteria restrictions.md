---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Validation rules"
domain: "Analysis Model"
element_id: 619530
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Refunds search criteria restrictions

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Validation rules

## 📝 Notes

At least one of the following rules (Rule1 - Rule3) must be met:

	
- Rule1: Contract number is mandatory
	
- Rule2: Refund created from is mandatory and Refund created to is mandatory
	
- Rule3: At least one Status of refunds is selected 


Error message: MSG_CUSTOM_SEARCH_SUPPLEMENT

## 🔗 Connections (1)

- ← Dependency: [[Refunds search criteria restrictions (Action 619531)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
