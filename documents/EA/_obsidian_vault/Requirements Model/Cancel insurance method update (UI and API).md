---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods/CSI-1905 Update of the Cancel Insurance method for new Service Catalogue"
domain: "Requirements Model"
element_id: 1701693
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Cancel insurance method update (UI and API)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods/CSI-1905 Update of the Cancel Insurance method for new Service Catalogue

## 📝 Notes

- Rule {ADD}Check conditions to insurance cancellation  added to call correct PCG API according to used service (Code+Ver or Ext.Id) and return service setting according to new rule {ADD}Insurance service setting mapping
	
- Rule also checks conditions for COP and PAYHOL for execution (not for constraint)
	
- 3 UC updated - current contraint and checks in the UC removed and the rule {ADD}Check conditions to insurance cancellation used instead
	
- new API v3 - response uses LoanService v3

## 📊 Appears In (1 diagrams)

- Custom: CSI-1905 Update of the Cancel Insurance method for new Service Catalogue
