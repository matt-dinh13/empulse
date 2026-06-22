---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850036
diagrams: 5
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {ADD}Create Loan Service Request with Service Operation Status (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model

## 📝 Notes

{ADD CSI-2970 /}
The rule describing the creation of the new Loan Service Request with Service Operation Status (service switching on/off).

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
{ADD CSI-3772}
- Request Origination = COS
{/ADD}
	
- Return to calling UC

## 🔗 Connections (4)

- ← Dependency: [[{MOD}08.060 Replace Loan Service method (COS)]]
- ← Dependency: [[{MOD}08.010 Add Service to Loan (COS)]]
- ← Dependency: [[08.020 Activate Loan Service (COS) (UseCase 1872528)]]
- ← Dependency: [[08.030 Deactivate Loan Service method (COS) (UseCase 1872518)]]

## 📊 Appears In (5 diagrams)

- Use Case: Activate Service on Contract - Use Case Model
- Use Case: Adding Service to Contract - Use Case Model
- Use Case: CSI-2971 Activate Service on Contract
- Use Case: Deactivate Service on Contract - Use Case Model
- Use Case: Replace Loan Service - Use Case Model
