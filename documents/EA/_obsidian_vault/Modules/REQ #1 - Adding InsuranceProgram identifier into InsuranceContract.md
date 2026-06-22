---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1598774
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 REQ #1 - Adding InsuranceProgram identifier into InsuranceContract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

The current Insurance Contract doesn't use Insurance Program code neither version. Insurance Program.Id id used for reference.
The current (see HO.BSL_OFFER_INSURANCE_SERVICE) contains Insurance Program code and version values, so it could be usable for supposed change required by this task.

Goal of the request is to add a new Insurance Program reference, i.e. InsuranceProgramExternalId, to Insurance Contract which will be used for integration with the new INSR component.
Rules:

	
- The InsuranceProgramExternalId will contain IP.Code and IP.Version concatenated
	
- The InsuranceProgramExternalId will be created (i.e. on Insurance Contract object creation) in all cases, i.e. in the current  BSL Insurance Program and the new INSR  Insurance Program integration
	
- A data migration, i.e. InsuranceProgramExternalId creation for the current Insurance Contracts will be performed - see REQ #2 of this task.


Changes tagged as CSI-608

## 📊 Appears In (2 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Custom: CSI-608 Adding InsuranceProgram identifier into InsuranceContract
