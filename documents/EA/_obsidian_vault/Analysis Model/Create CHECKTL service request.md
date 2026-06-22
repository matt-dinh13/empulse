---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model"
domain: "Analysis Model"
element_id: 1701841
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Create CHECKTL service request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model

## 📝 Notes

This rule describes creation of Checking Terms of Loan service request
Input:

	
- CHECKTL Contract Service


Output:

	
- LSR of CHECKTL type


LSR attributes:
- Reference to Contract Service
- Request Type = 'CHECKTL'
- External ID = 'LSR'+integer from a sequence (it has to be unique)
- Current Status = 'CREATED'; and creates record in related Loan Service Request Status Transition entity
- Expired Date = Contract.Financial Parameters.Expected End Date
- reference to Contract Service

## 🔗 Connections (2)

- ← Dependency: [[08.409 Evaluate Checking Terms of Loan Service]]
- ← Dependency: [[08.408 Set terms of loan fulfillment]]

## 📊 Appears In (1 diagrams)

- Use Case: Checking Terms of Loan Service
