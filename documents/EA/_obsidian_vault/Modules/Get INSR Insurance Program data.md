---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827566
diagrams: 5
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get INSR Insurance Program data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

This rule describes getting active Insurance Program data by Code from the INSR component

Input:

	
- insuranceProgram.code



	
- System calls https://insr.{environment}/rest/v2.0/insurance-programs with parameter code=insuranceProgram.code, {ADD CSI-1858}projection=FULL{/ADD}
	
- If the response is 200 (OK), (InsuranceProgram object) is put into output
	
- If the response is 40x, the error (code/description of the issue) is put into output
	
- If no response (timeout), INSR_component_unavailable is put into output

## 🔗 Connections (1)

- ← Dependency: [[11.010 Create deal (VAS) (UseCase 1829623)]]

## 📊 Appears In (5 diagrams)

- Custom: Business rules
- Custom: CBL-12587 (CSI-1864) Custom data definition and validation
- Custom: CSI-1454 Create Deal method implementation
- Custom: CSI-1806 Create Deal method modification
- Use Case: Deal management - Use Case Model
