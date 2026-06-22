---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods"
domain: "Requirements Model"
element_id: 1721096
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1881 Update of the Create Contract Service method for new Service Catalogue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods

## 📝 Notes

This requirement describes needed changes of the current Create Contract Service method so that the new Service Catalogue can be also used.

New Service Catalogue example:
https://prc.vn00a1.cz.infra/openapi/v1/sc-services/7042154b-9102-4ea1-a9df-4183666b9342?deps=PARAMETERS

Missing parameters in the Service Catalogue:

	
- manualTerminationAllowed,   manualCancellationAllowed


Compare with the old Services:
https://prc.vn00a1.cz.infra/openapi/v1/services/INS_LI_REL%3A7?deps=PARAMETERS

## 🔗 Connections (1)

- → Generalization: [[CBL-16736 General requirement]]

## 📊 Appears In (1 diagrams)

- Custom: Update BSL Contract Service methods
