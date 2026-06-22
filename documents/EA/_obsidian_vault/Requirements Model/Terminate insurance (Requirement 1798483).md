---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases"
domain: "Requirements Model"
element_id: 1798483
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Terminate insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases

## 📝 Notes

UC 11.121 Terminate insurance contract manually

	
- add step: if Contract.Contract Type= REL, then call POST cos .../rest/v1/contract-services/{externalId}/terminate
	
- for the current calling UC08.121 add condition: if Contract.Contract Type != REL, ...


UC 08.454 Terminate contract insurance service (BSL REST API method)

	
- add step: if Contract.Contract Type= REL, then call POST cos .../rest/v1/contract-services/{externalId}/terminate
	
- for the current calling UC08.121 add condition: if Contract.Contract Type != REL, ...

## 📊 Appears In (1 diagrams)

- Use Case: KZ BSL integration - use cases
