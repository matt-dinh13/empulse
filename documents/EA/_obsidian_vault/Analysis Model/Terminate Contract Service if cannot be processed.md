---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878898
diagrams: 6
connections: 11
tags:
  - requirement
  - analysis-model
---

# 📋 Terminate Contract Service if cannot be processed

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

Input:
- Contract
- Service Type

System terminates all active services of Service type from input assigned to Contract from input, i.e. sets:

	
- ContractService.Status = 'Terminated'
	
- Status Reason = 'SERVICE_CANNOT_BE_APPLIED'
	
- End Date = the current date and time

for Contract.ContractService having (Status = 'Active' and Contract.ContractService.Service.ServiceType = ServiceType.Code)

## 🔗 Connections (11)

- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[08.262 Process Fees-back service (UseCase 1838986)]]
- ← Dependency: [[{MOD}08.362 Process payment holiday request]]
- ← Dependency: [[08.063 Process request for change due date (UseCase 1862206)]]
- ← Dependency: [[{MOD}08.280 Check and process CET request]]
- ← Dependency: [[{MOD}08.252 Process cooling-off period]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]
- ← Dependency: [[{MOD}08.220 Check and process Grace period]]
- ← Dependency: [[{NotImplemented}08.100 Process Full early repayment]]
- ← Dependency: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (6 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: CHDDR processing
- Use Case: Contract Early Termination processing
- Use Case: Full early repayment processing
- Use Case: Gift payment processing
- Use Case: Payment holiday processing
