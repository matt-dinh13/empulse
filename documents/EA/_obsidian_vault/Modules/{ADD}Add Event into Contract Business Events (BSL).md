---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850029
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Add Event into Contract Business Events (BSL)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model

## 📝 Notes

{ADD CSI-2974 /}
This rule describes adding Business Event to Contract via BSL web service method. (UC01_350 privilege is needed)
Input:

	
- contractCode
	
- eventType



	
- System calls BSL BusinessEventWS.createBusinessEvent method with parameters:
- contractCode - contractCode
- timeOfModification = current date and time
- modifiedBy = the logged user
- type = eventType
	
- If the response <> SUCCESS, or timeout happen,  system logs the error and continues with next steps
	
- Return to the calling use case.

## 🔗 Connections (2)

- ← Dependency: [[08.040 Terminate Loan Service (COS) (UseCase 1872527)]]
- ← Dependency: [[08.050 Cancel Loan Service method (COS) (UseCase 1872512)]]

## 📊 Appears In (3 diagrams)

- Use Case: Cancel Loan Service - Use Case Model
- Use Case: CSI-2974 Terminate Service on Contract
- Use Case: Terminate Service on Contract - Use Case Model
