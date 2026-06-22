---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1876184
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Check INSR Insurance Program eligibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

This rule describes how to check if provide Insurance Program(s) is eligible for provided data.

Input:

	
- DataEligibilityCheck



	
- System calls PUT <INSR_ADDRESS>/rest/v1.0/insurance-programs/data-eligibility {DataEligibilityCheck}
	
- If the response is 200 (OK), linked InsuranceProgramEligibilityResults  is put into output
	
- If the response is 40x, the error (code/description of the issue) is put into output
	
- If no response (timeout), INSR_component_unavailable is put into output

## 🔗 Connections (3)

- ← Dependency: [[11.126 Check client eligibility for insurance (UseCase 1879786)]]
- ← Dependency: [[{MOD}11.010 Create insurance contract]]
- ← Dependency: [[08.344 Generate insurance offers for contract (UseCase 1879848)]]

## 📊 Appears In (4 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Use Case: Create and Sign Insurance contract
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
