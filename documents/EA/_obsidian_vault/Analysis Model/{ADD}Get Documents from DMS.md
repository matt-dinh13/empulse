---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model"
domain: "Analysis Model"
element_id: 1881454
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get Documents from DMS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model

## 📝 Notes

{ADD CSI-2518 /}
The rule describes how to get Document data from DMS module by its identifier

Input:

	
- documentUuid[] -- array of document identifiers


Output:

	
- Documents[]


Steps:

	
- System calls DMS GET ..documents (find documents) with parameters:
- documentUuid[]
	
- If the call returns Http 200, system passes the result into the Documents[] object, otherwise an error is returned

## 🔗 Connections (1)

- ← Dependency: [[13.108 Accept Transaction Supplement documents]]

## 📊 Appears In (1 diagrams)

- Use Case: Transaction Supplement documents - Use case model 
