---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases"
domain: "Requirements Model"
element_id: 1798491
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Terminate service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/KZ BSL integration - use cases

## 📝 Notes

UC08.090 Terminate service manually

	
- add step before the current calling UC08.091 : if Contract.Contract Type= REL, then call POST cos .../rest/v1/contract-services/{externalId}/terminate
	
- for the current calling UC08.091 add condition: if Contract.Contract Type != REL, ...


UC08.292 Process Contract Service Change event

	
- terminate/cancel bundled services, related for CEL only?

## 📊 Appears In (1 diagrams)

- Use Case: KZ BSL integration - use cases
