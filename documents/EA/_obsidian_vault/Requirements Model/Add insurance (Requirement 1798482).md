---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases"
domain: "Requirements Model"
element_id: 1798482
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Add insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases

## 📝 Notes

UC 08.340 Show Insurance offers for loan contract

	
- Only new types of insurances is offered (i.e. Insurance Service setting follows Insurance Service.First Insurance Period Trigger in (CONTRACT_SIGNING_ DATE_AND_OFFSET or CONTRACT_ACTIVATION_DATE_AND_OFFSET or FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET) and First Insurance Period Duration = BILLING_PERIOD))


	
- Check client eligibility in INSR - check used INSR API version; the last version of INSR module will be deployed in KZ


UC 08.342 Get contract insurance offers service (BSL REST API method)

	
- no change is needed


UC 08.345 Add Insurance on Contract

	
- the current code part which calls UC 08.346 will be replaced by calling of POST /rest/v1/contract-services


UC 08.347 Add Insurance service on Contract service (BSL REST API method)

	
- the current code part which calls UC 08.346 will be replaced by calling of POST /rest/v1/contract-services

## 📊 Appears In (1 diagrams)

- Use Case: KZ BSL integration - use cases
