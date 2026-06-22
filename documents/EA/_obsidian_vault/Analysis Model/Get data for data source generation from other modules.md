---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model"
domain: "Analysis Model"
element_id: 1879414
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get data for data source generation from other modules

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model

## 📝 Notes

This rule describes, how system gets data for data source generation from other module.

Steps:

	
- System prepares the necessary input data and calls the respective module using the dedicated method of its interface.
	
- System takes the relevant data from the module's response and use them as values for processed attributes of generated data source. If no data are returned within the response or module returns an error response, then the request failed.

## 🔗 Connections (2)

- ← Dependency: [[GET ContractDataSource]]
- ← Dependency: [[Generate content of agreement]]

## 📊 Appears In (1 diagrams)

- Use Case: Prepare documentation to sign
