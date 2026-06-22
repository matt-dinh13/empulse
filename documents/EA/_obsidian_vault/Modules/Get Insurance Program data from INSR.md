---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-2968 Terminate Deal method"
domain: "Modules"
element_id: 1827564
diagrams: 4
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Get Insurance Program data from INSR

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-2968 Terminate Deal method

## 📝 Notes

This rule describes getting Insurance Program data by its ExternalId from the INSR component
Input:

	
- externalId (insuranceProgram.code-insuranceProgram.version)


Output:

	
- InsuranceProgram object ||error



	
- System calls https://insr.{environment}/rest/v3/insurance-programs?{externalId} with projection EXTENDED
	
- If the response is 200 (OK), (InsuranceProgram object) is returned into output
	
- If the response is 40x, the error (code/description of the issue) is returned into output
	
- If no response (timeout), INSR_component_unavailable is returned into output
	
- End

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Update Deal Period for Deal termination]]
- ← Dependency: [[{ADD}11.076 Finalize Deal Period]]

## 📊 Appears In (4 diagrams)

- Use Case: CSI-2968 Terminate Deal method - use cases
- Use Case: Deal management - Use Case Model
- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
