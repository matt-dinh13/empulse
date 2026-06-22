---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1876179
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Get INSR Insurance Program data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

This rule describes getting Insurance Program data by its ExternalId from the INSR component

Input:

	
- externalId (insuranceProgram.code-insuranceProgram.version)



	
- System calls https://insr.{environment}/rest/v1.0/insurance-programs?{externalId}
	
- If the response is 200 (OK), (InsuranceProgram object) is put into output
	
- If the response is 40x, the error (code/description of the issue) is put into output
	
- If no response (timeout), INSR_component_unavailable is put into output

## 🔗 Connections (5)

- ← Dependency: [[CELInsuranceAccountTransaction (Class 1727329)]]
- ← Dependency: [[{MOD}Calculate new installment amount on service termination]]
- ← Dependency: [[{MOD}11.010 Create insurance contract]]
- ← Dependency: [[11.020 Add insurance period (UseCase 1879775)]]
- ← Dependency: [[11.122 Finalize insurance period (UseCase 1879773)]]

## 📊 Appears In (5 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Logical: Generated JMS messages - Additional insurance transaction v4
- Use Case: Contract insurance termination
- Use Case: Create and Sign Insurance contract
- Use Case: Showing Insurance Contract info
