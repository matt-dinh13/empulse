---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model"
domain: "Analysis Model"
element_id: 1881453
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get Client Document Types for Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model

## 📝 Notes

{ADD CSI-2518 /}
This rule describes obtaining Document Types required from client for Transaction Supplement.

Input:

	
- SupplementId
	
- RequiredDocumentContainerCode


Output:

	
- Client's Document Type list


Steps:

	
- Get List of Document Types contained in Supplement -> Required Document Container having Code = RequiredDocumentContainerCode and Supplement.Id = SupplementId and Supplement To Required Document Container.Archived=0
	
- Return obtained Document Types in List of Client's Document Types

## 🔗 Connections (1)

- ← Dependency: [[13.108 Accept Transaction Supplement documents]]

## 📊 Appears In (1 diagrams)

- Use Case: Transaction Supplement documents - Use case model 
