---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827553
diagrams: 9
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Check INSR Insurance Program eligibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

This rule describes how to check if provide Insurance Program(s) is eligible for provided data.

Input:

	
- DataEligibilityCheck



	
- System calls PUT <INSR_ADDRESS>/rest/v3/insurance-programs/eligibility-check {DataEligibilityCheck}
	
- If the response is 200 (OK), linked InsuranceProgramEligibilityResults  is put into output
	
- If the response is 40x, the error (code/description of the issue) is put into output
	
- If no response (timeout), INSR_component_unavailable is put into output

## 🔗 Connections (4)

- ← Dependency: [[{ADD}11.072 Create New Period for Prolongation (VAS)]]
- ← Dependency: [[11.010 Create deal (VAS) (UseCase 1829623)]]
- ← Dependency: [[11.040 Activate Deal (VAS)]]
- ← Dependency: [[{ADD}11.074 Finalize Elapsed and Create new Period for Prolongation (VAS)]]

## 📊 Appears In (9 diagrams)

- Custom: Business rules
- Custom: CBL-12587 (CSI-1864) Custom data definition and validation
- Custom: CSI-1454 Create Deal method implementation
- Custom: CSI-1806 Create Deal method modification
- Use Case: Activate Deal - Use Case Model
- Use Case: CSI-2918 VAS Deal activation method
- Use Case: Deal management - Use Case Model
- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
