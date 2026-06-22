---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type"
domain: "Requirements Model"
element_id: 1762778
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2052 - Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type

## 📝 Notes

CSI as the source of contract service data and statuses
 

	
- add a new PCG configuration (probably parameter SERVICE_TERMINATION in ho.bsl_service_type2flag) which will determine in which contract (maybe REL account) statuses the service should be terminated, possibly switched-off.
	
- configure ACCSTMT service type there only for Closed contract status, the rest of service types for Paid off, Write off, Finished (again - terminate, or switch-off?)
	
- start terminating contract services during paid off, write off or finishing of contract (according to the newly created PCG configuration) and notify the AM about this change, i.e. LoanService will listen AM notifications about the Account status changes and react appropriately.
	
- AM change the service status based on the CSI message. AM stops terminating the services on their own logic - it listens only to CSI.


If a Service is switched-off due to Account Payoff/Written-off, Contract detail - Service (insurance) UI action for switch-on will be disabled

## 🔗 Connections (3)

- ← Aggregation: [[CSI-2226 Terminate LoanService on Account Closure notification (Requirement 1762784)]]
- ← Aggregation: [[CSI-2222 Change LoanService status on defined Account Closure notifications]]
- ← Aggregation: [[CSI-2225 Remove Insurance deactivation on BSL ContractPaidOffSE system event]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type
