---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1833431
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get Commodity Type data by code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

This rule describes obtaining Commodity Type data based on Commodity type code
 

	
- System calls GET method of .../openapi/v1/commodity-types/{codes}
	
- If call is successful, Commodity Type data is returned

## 🔗 Connections (1)

- ← Dependency: [[Name of goods purchased]]

## 📊 Appears In (2 diagrams)

- Custom: Authentication questions
- Custom: Business Rules
