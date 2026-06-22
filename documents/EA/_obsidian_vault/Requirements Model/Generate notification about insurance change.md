---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type"
domain: "Requirements Model"
element_id: 1876166
diagrams: 8
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 Generate notification about insurance change

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type

## 📝 Notes

The rule describes how to create LoanServiceRequestRequest message for notification about insurance switch on/off 
Input:

	
- InsuranceContract


Steps:
Create LoanServiceRequestRequest structure as follow

	
- contractCode = InsuranceContract.Loan Contract Code related to the Insurance
	
- eventType = ContractServiceChangedSE
	
- requestId = InsuranceContract.->Insurance Operation Status.Request Id
	
- expirationDate = InsuranceContract. ->Insurance Period.Start Date
	
- requestType = InsuranceContract.Insurance Type
	
- serviceOperationStatus = InsuranceContract.->Insurance Operation Status.Status
	
- requestChanges:
- changeType = 'EXECUTED'
- changeDate = Case SWITCHED_ON get InsuranceContract. -> Insurance Period.Start Date
                           Case SWITCHED_OFF get Insurance Contract.-> Insurance Operation Status.Creation Date
	
- switchServiceOperationStatusParameters.
- operationParameters.code = INSURANCE_CONTRACT; value = InsuranceContract.Contract Code
- operationParameters.code = SERVICE_CODE; value = InsuranceContract.Service Code
- operationParameters.code = SERVICE_VERSION; value InsuranceContract.Service Version

## 🔗 Connections (6)

- ← Dependency: [[11.147 Activate insurance on contract]]
- ← Dependency: [[11.149 Deactivate insurance on contract]]
- ← Dependency: [[11.773 Process account EOM billing finished notification (UseCase 1875631)]]
- ← Dependency: [[11.770 Activate insurance on first account transaction notification]]
- ← Dependency: [[11.126 Check client eligibility for insurance (UseCase 1879786)]]
- ← Dependency: [[11.772 Activate insurance on Contract event notification]]

## 📊 Appears In (8 diagrams)

- Custom: CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type
- Custom: CBL-18500 (CSI-2052) Removing LoanServiceRequest notification
- Use Case: Adding Insurance Service on REL contract
- Use Case: Changing insurance operation status
- Use Case: CSI-2292 Change of Insurance Operation Status behaviour
- Use Case: CSI-2292 Change of Insurance Operation Status behaviour - 2
- Use Case: Insurance based on EOM message
- Use Case: Insurance on REL Contract management
