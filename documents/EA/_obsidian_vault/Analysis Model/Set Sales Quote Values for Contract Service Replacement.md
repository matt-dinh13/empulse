---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Use Case Model"
domain: "Analysis Model"
element_id: 1881622
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Set Sales Quote Values for Contract Service Replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Use Case Model

## 📝 Notes

{ADD CSI-4317}{Country VN}
Adding of a Sales Quote to the Sales Quote Applied related to the Contract Supplement.

Input:

	
- ContractSupplement
	
- SQD.data


	
- serviceExternalId = from input


Steps:
1. Store values in Sales Quote Applied entity

	
- Sales Quote Id = SQD.code
	
- Service External Id = serviceExternalId

## 🔗 Connections (1)

- ← Dependency: [[{ADD}13.600 Process contract service replacement request]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract service replacement request processing
