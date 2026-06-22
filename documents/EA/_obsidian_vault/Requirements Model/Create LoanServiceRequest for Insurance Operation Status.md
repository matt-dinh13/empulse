---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/CSI-2292 Change of Insurance Operation Status behaviour"
domain: "Requirements Model"
element_id: 1876173
diagrams: 3
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Create LoanServiceRequest for Insurance Operation Status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/CSI-2292 Change of Insurance Operation Status behaviour

## 📝 Notes

Rule describing the creation of the new Loan Service Request with Service Operation Status (service switching on/off) which is related to the Insurance Service

Input:
 

	
- InsuranceContract
	
- newStatus
	
- reasonCode
	
- note
	
- GenerateSystemEvent (boolean), TRUE in default


Steps:
 

	
- System gets ContractService where Contract Insurance Service.Insurance  Contract Code =  InsuranceContract.Contract Code and related Contract.Contract Code = InsuranceContract.Loan Contract Code
If no ContractService is found, scenario ends.
	
- System inserts the change into InsuranceContract.Insurance Operation Status:
- Status = newStatus
- Reason Code = reasonCode
- Request Id = 'LIR' + integer from a sequence (it has to be unique)
	
- System creates and stores data into the Loan Service Request with Service Operation Status:
- Contract_id = ContractService.Contract Id
- Request Type = InsuranceContract.Insurance Type
- Contract Service = reference to ContractService
- External ID = InsuranceContract.->Insurance Operation Status.Request Id
- Current Status = 'CREATED' and creates record in related Loan Service Request Status Transition entity
- Expired Date = Created Date + 1day
- Note = note
- Service Operation Status = newStatus
	
- If GenerateSystemEvent = true, system generates ContractInsuranceServiceOperStatusChangedSE system event -- instead of sending RMQ LoanServiceRequest notification, ContractInsuranceServiceOperStatusChangedNotification is sent
	
- It returns back to the caller

## 🔗 Connections (4)

- ← Dependency: [[11.147 Activate insurance on contract]]
- ← Dependency: [[11.149 Deactivate insurance on contract]]
- ← Dependency: [[11.126 Check client eligibility for insurance (UseCase 1879786)]]
- ← Dependency: [[11.772 Activate insurance on Contract event notification]]

## 📊 Appears In (3 diagrams)

- Use Case: CSI-2292 Change of Insurance Operation Status behaviour
- Use Case: CSI-2292 Change of Insurance Operation Status behaviour - 2
- Use Case: Processing Account Closure notifications
