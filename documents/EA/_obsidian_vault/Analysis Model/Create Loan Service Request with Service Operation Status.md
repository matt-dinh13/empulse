---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833426
diagrams: 11
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Create Loan Service Request with Service Operation Status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

Rule describing the creation of the new Loan Service Request with Service Operation Status (service switching on/off).

Input:
 

	
- ContractService
	
- ServiceDefinition
	
- newStatus
	
- note


Steps:
 

	
- System creates and stores data into the Loan Service Request with Service Operation Status:
- Contract_id = reference to contract from input
- Request Type = ServiceDefinition.Service Type
- Contract Service = reference to ContractService
- External ID = 'LSR' + integer from a sequence (it has to be unique)
- Current Status = 'CREATED' and creates record in related Loan Service Request Status Transition entity
- Expired Date = Created Date + 1day
- Note = note
- Service Operation Status = newStatus
	
- If {DEL CSI-2532}RemoveLoanServiceRequestNotification{/DEL} {ADD CSI-2532}RemoveLSR4ReplaceService{/ADD} = 0 or not exists (feature flag), system generates a system event LoanServiceRequestCreatedSE with the Loan Service Request as a parameter. -- if RemoveLoanServiceRequestNotification flag is set up, LSR notification is stopped

## 🔗 Connections (4)

- ← Dependency: [[{MOD}08.121 Terminate contract insurance common]]
- ← Dependency: [[08.111 Cancel contract insurance common]]
- ← Dependency: [[{MOD}08.346 Add Insurance service on Contract common]]
- ← Dependency: [[{MOD}01.774 Create Contract Service]]

## 📊 Appears In (11 diagrams)

- Custom: Business Rules
- Custom: CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type
- Custom: CBL-18500 (CSI-2052) Removing LoanServiceRequest notification
- Use Case: Change LoanService status on defined Account Closure notifications
- Use Case: CSI-2287 Replace LoanServiceRequest sending for Operation Status change
- Use Case: CSI-2292 Change of Insurance Operation Status behaviour
- Use Case: CSI-2307 Processing AM responses on Service changes
- Use Case: Loan Service - Add a Service to Contract
- Use Case: Service - Contract Service management via API
- Use Case: Service - Contract Service management via UI
- Use Case: Service - switch on/off
