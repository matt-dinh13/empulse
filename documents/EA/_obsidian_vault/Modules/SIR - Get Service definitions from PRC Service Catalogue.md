---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850562
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Service definitions from PRC Service Catalogue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get a Service definitions by their identifiers from the new Service Catalogue

Input:

	
- serviceCodes[]

Output:

	
- ServiceDefinition[] object || an error


Steps:

	
- System calls GET ...prc/openapi/vx/sc-services/{serviceCodes[] --service codes delimited by comma}?deps=PARAMETERS
	
- If the call returns Http 200, system passes the result into the ServiceDefinition[] object, otherwise an error is returned

## 🔗 Connections (1)

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
