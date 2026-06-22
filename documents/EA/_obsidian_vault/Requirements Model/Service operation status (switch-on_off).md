---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases"
domain: "Requirements Model"
element_id: 1798485
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Service operation status (switch-on/off)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases

## 📝 Notes

UC08.030 Show service operation status

	
- no change


08.070 Switch service on/off manually

	
- in step 6 of UC, replace of code parts where the Loan Service Request.Service Operation Status is changed, it is needed to call
- POST /rest/v1/contract-services/{externalId}/activate if the previous status (showed on the button) is SWITCHED_OFF
- POST /rest/v1/contract-services/{externalId}/deactivate if the previous status is SWITCHED_ON


	
- There should be added steps for evaluation of the COS call responses

## 📊 Appears In (1 diagrams)

- Use Case: KZ BSL integration - use cases
