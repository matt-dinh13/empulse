---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1868217
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Get the latest Service Operation Status (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get the latest Loan Service Request with Service Operation Status (for service switch on/off).

Input:

	
- ContractService


Output:

	
- ServiceOperationStatus or NULL


Steps:

	
- System selects Loan Service Request related to ContractService where LSR.Creation Date = MAX(CREATION_DATE) and LSR.Current Status not in (CANCELLED, REJECTED).
	
- If a LSR is found, sets ServiceOperationStatus = LSR.Service Operation Status and returns the result.
	
- If there is no previously created LSR or there are only CANCELLED requests, system returns NULL.

## 🔗 Connections (3)

- ← Dependency: [[08.020 Activate Loan Service (COS) (UseCase 1876290)]]
- ← Dependency: [[08.030 Deactivate Loan Service method (COS) (UseCase 1876286)]]
- ← Dependency: [[08.060 Replace Loan Service method (COS) (UseCase 1876274)]]

## 📊 Appears In (4 diagrams)

- Use Case: Activate Service on Contract - Use Case Model
- Use Case: CSI-2971 Activate Service on Contract
- Use Case: Deactivate Service on Contract - Use Case Model
- Use Case: Replace Loan Service - Use Case Model
