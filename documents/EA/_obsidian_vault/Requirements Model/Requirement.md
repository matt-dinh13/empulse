---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-5786 (CBL-27569) - Monitoring improvement of disbursement channel change post contract registration - ANA - HoSel-Contract&Payments"
domain: "Requirements Model"
element_id: 1856201
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Requirement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-5786 (CBL-27569) - Monitoring improvement of disbursement channel change post contract registration - ANA - HoSel-Contract&Payments

## 📝 Notes

1. Modification of 01.668
Existing process is adjusted with condition Contract = REL for the request to be created. CEL CASH contract related tickets are removed by this change from 01.668.

2. Modification of Process ContractRegisteredSE
Function of ticket creation for DCC in case of CEL CASH Contracts is added. Checks for case(s) where  multiple DI purpose payment channels exist. If this condition is met, ticket will be created in DCC FLOW.
Existing DCC FLOW, as it is requested to make the change to DCC FLOW for both REL and CEL CASH.

3. Relevant changes done outside of EA documentation (TCK):

	
- OQ department is created in IN_TICKETING_CONFIGURATION
	
- DCC FLOW is adjusted in IN_TICKETING_CONFIGURATION

Specifications for both chances come from IN side, see more in latest comments at https://jira.homecredit.net/jira/browse/BRIN-280

## 📊 Appears In (1 diagrams)

- Custom: PAYM-5786 (CBL-27569) - Monitoring improvement of disbursement channel change post contract registration - ANA - HoSel-Contract&Payments
