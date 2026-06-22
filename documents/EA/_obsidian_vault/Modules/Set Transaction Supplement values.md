---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870134
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Set Transaction Supplement values

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

Extension of Contract Supplement for Transaction Supplement

Input:

	
- requestSource = the request.sourceSystem [sourceSystem; sourceRequestId]
	
- applicationCode = the request.applicationCode



Stored values in Contract Transaction Supplement extension:

	
- Request Source = requestSource
	
- Application Code = applicationCode

## 🔗 Connections (1)

- ← Dependency: [[Create contract supplement rule]]

## 📊 Appears In (1 diagrams)

- Use Case: Create Contract Service Supplement - Use Case Model
