---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules"
domain: "Analysis Model"
element_id: 1818739
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Getting LAP vector data from other modules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules

## 📝 Notes

This element describes how system gets data for respective LAP vector item from other module.

Steps:

	
- System prepares the necessary input data and calls the respective module using the dedicated method of its interface.
	
- System takes the relevant data from the module's response and use them as a value for processed full path of the vector. If no data are returned within the response or module returns an error response, full path is skipped with no data filled.

## 🔗 Connections (1)

- ← Dependency: [[01.162 Preparation of LAP vector (UseCase 1819973)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Send to evaluation
