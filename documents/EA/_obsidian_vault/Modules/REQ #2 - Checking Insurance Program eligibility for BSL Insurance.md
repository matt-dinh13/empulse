---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1601390
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ #2 - Checking Insurance Program eligibility for BSL Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

A list of use cases/rules where the REST INSR eligibility-check will be called:

	
- 08.344 Generate insurance offers for contract (08.340 Show Insurance offers for loan contract??)
	
- 11.010 Create insurance contract
	
- 11.126 Check client eligibility for insurance


ClmFeatureFlag.useNewInsrProgram (boolean) is used for distinction which function (BSL/INSR) is to be used

## 📊 Appears In (1 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
