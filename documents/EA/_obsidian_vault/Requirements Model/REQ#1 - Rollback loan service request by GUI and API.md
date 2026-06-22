---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10922 (CSI-286) Rollback of executed Payhol request"
domain: "Requirements Model"
element_id: 1608404
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Rollback loan service request by GUI and API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10922 (CSI-286) Rollback of executed Payhol request

## 📝 Notes

Rollback process is the same for all service types, but only Payhol is supported now.

The process is started in GUI or by API:

	
- GUI - new button in the list of executed request (Tab - Collection tools requests) - UC {ADD}08.351 Rollback loan service request is used
	
- API - new UC {ADD}01.821 Rollback Loan Service Request service


Following actions is done:

	
- validation for all possible conditions by the rule according to the service type (access right, contract status, service setting, LSR status).
	
- calling API for rollback function provided by IS team and evaluation of the result (If rollback is successful, the Loan service request is canceled and LoanServiceRequestRollbackSE  is generated as part of rollback action called by API)
	
- cancellation of Contract supplement related to the request (if exists)


Generated LoanServiceRequestRollbackSE is processed by {ADD}08.352 Process LoanServiceRequestRollbackSE event which creates business events and generates other system events according the service type.

## 📊 Appears In (1 diagrams)

- Custom: CBL-10922 (CSI-286) Rollback of executed Payhol request
