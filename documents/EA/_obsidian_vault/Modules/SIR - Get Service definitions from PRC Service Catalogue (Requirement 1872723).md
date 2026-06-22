---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872723
diagrams: 4
connections: 4
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Service definitions from PRC Service Catalogue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get a Service definitions by their identifiers from the new Service Catalogue

Input:

	
- serviceCodes[]

Output:

	
- ServiceDefinition[] object || an error


Steps:

	
- System calls GET ...prc/openapi/vx/sc-services/{serviceCodes[] --service codes delimited by comma}?deps=PARAMETERS
	
- If the call returns Http 200, system passes the result into the ServiceDefinition[] object, otherwise an error is returned

## 🔗 Connections (4)

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]
- ← Dependency: [[{MOD}16.020 Process request for a loan]]
- ← Dependency: [[{MOD}16.050 Process Contract Supplement notification]]
- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (4 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: Transaction origination - Use Case Model
