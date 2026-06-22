---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850575
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Insurance Program definition from INSR

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes getting active Insurance Program data by its code from the INSR component

Input:

	
- insuranceProgramCode


Output

	
- InsuranceProgram



	
- System calls GET ../rest/vx/insurance-programs?code = insuranceProgramCode, versionStatus = ACTIVE
	
- If the response is 200 (OK) and an InsuranceProgram object returned, it is passed into output, otherwise the error (code/description of the issue) is returned

## 🔗 Connections (1)

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
