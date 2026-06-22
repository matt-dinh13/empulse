---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1868224
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Contract by contractCode from COMA

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get some Contract data via COMA API method.

Input:

	
- contractCode



	
- System calls COMA GET method .../rest/v1/contracts/{contractCode}?projection=CUSTOMER_DEFAULT&projection=ACCOUNT_DEFAULT
	
- System returns the response

## 🔗 Connections (1)

- ← Dependency: [[08.010 Add Service to Loan (COS) (UseCase 1876285)]]

## 📊 Appears In (1 diagrams)

- Use Case: Adding Service to Contract - Use Case Model
