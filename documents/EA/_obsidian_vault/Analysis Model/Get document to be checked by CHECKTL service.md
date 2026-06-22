---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model"
domain: "Analysis Model"
element_id: 1701843
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get document to be checked by CHECKTL service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model

## 📝 Notes

This rule describes way of getting info whether the document to be checked exists in the system.

Input:

	
- CHECKTL Service


Output:

	
- Document object


Steps:

	
- Get last created active Document of CHECKTL Service.Checked Document Type related to processed Contract
	
- If Document is found, return it as output

## 🔗 Connections (1)

- ← Dependency: [[08.408 Set terms of loan fulfillment]]

## 📊 Appears In (1 diagrams)

- Use Case: Checking Terms of Loan Service
