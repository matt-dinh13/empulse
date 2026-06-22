---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/UseCase Model - Fill in application"
domain: "Analysis Model"
element_id: 1822803
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Find document based on UUID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/UseCase Model - Fill in application

## 📝 Notes

This element describes the algorithm of how system finds the correct document object based on the document UUID.

Input:

	
- DocumentUUID - unique identifier of a document


Output:

	
- Document - object of a respective document


Steps:

	
- System tries to find a document with UUID matching the DocumentUUID received on the input by searching the following document entities first:
   - Contract Document (i.e. Contract_Document[.UUID=DocumentUUID]->Document),
   - Client Document (i.e. Client_Document[.UUID=DocumentUUID]->Document).
If found, such Document is returned and algorithm ends. Otherwise algorithm continues with the next step.
	
- System tries to find a TempAppl Document with matching UUID (i.e. TempAppl_Document[.UUID=DocumentUUID]).
If found, such Document is returned. Otherwise algorithm ends with no Document found.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}01.169 Get document content]]
- ← Dependency: [[01.055 Send person photo for face recognition processing (UseCase 1821365)]]

## 📊 Appears In (2 diagrams)

- Use Case: Fill in application
- Use Case: Use Case
