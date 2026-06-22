---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals"
domain: "Requirements Model"
element_id: 1586677
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Cancel contract insurances within CET processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals

## 📝 Notes

Goal of the requirement: If CET request contains a request for excluding insurance, in case of CET execution when a client's payment cover whole debt successfully, all active insurance contracts related to the processed loan contract are canceled.

Proposed solution:

	
- The current UC 08.280 Check and process CET request will be extended with steps to check and cancel the insurance contracts found
	
- The current REST method of contractservices/insurance/cancel will be used to insurance contract cancellation


	
- An example of the call: https://bsl.in00a1.cz.infra/bsl/openapi/v1.0/contractservices/insurance/cancel' \
{  "serviceId": "53105",  "cancelationReasonNotice": "TEST API"}

## 📊 Appears In (1 diagrams)

- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
