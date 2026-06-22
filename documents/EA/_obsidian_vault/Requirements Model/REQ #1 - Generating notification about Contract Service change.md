---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5024 (CLM-1786) Notification message to Contract Insurance change"
domain: "Requirements Model"
element_id: 1385986
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Generating notification about Contract Service change

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5024 (CLM-1786) Notification message to Contract Insurance change

## 📝 Notes

Goal of this task is generating of notification message when a Service is added/removed to loan Contract. This notification should replace the current ContractServiceChangedSE (ContractFullInfo notification) used in some cases of adding Service on a Contract.
Primarily, it is needed to notify about adding (replacement) the mandatory insurance on running contract in case of termination of a standard insurance. The notifications will be only generated on service change at running contract (i.e. no notification about service at the contract origination).
It is supposed, a client (an external system) receives information about a change (e.g. insurance added on contract). The notification will only contains basic information about changed object (loan contract code, insurance contract code, service code and Id, cuid). If the client needs some additional information about changed objects, it has to call specific web services to getting this data:

	
- for information about service including insurance service REST <BSL address>openapi/v1.0/customers/10120853/contracts/3900004053/services/serviceId = 123456
	
- for detail of insurance contract can call REST GET <BSL address>openapi/v1.0/insurancecontract?insuranceContractCode=3700020394INS_LI_REL

## 📊 Appears In (1 diagrams)

- Custom: CBL-5024 (CLM-1786) Notification message to Contract Insurance change
