---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773392
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 General validation of attributes rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Each attribute from application is validated separately as follows:
 

	
- attribute type "text" has set length <= allowed database length . If the user adds more than allowed database characters message MSG_MAXIMUM_LENGTH will appear.
	
- attribute type "number" has set value <= allowed database value. If the user adds more than allowed database characters message MSG_MAXIMUM_NUMBER_LENGTH will appear.
	
- attribute type "BIGDECIMAL" has set value <= allowed database value. If the user adds more than allowed database characters message MSG_MAXIMUM_BIGDECIMAL_LENGTH will appear.

## 🔗 Connections (1)

- ← Dependency: [[Application validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
