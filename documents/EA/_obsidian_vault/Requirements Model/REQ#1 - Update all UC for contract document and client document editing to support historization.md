---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6367 (CLM-2082) Document data historization"
domain: "Requirements Model"
element_id: 1436964
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Update all UC for contract document and client document editing to support historization

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6367 (CLM-2082) Document data historization

## 📝 Notes

Update of document attribute in GUI and/or API causes archiving of current document and creation of new document with new DocumentID. It leads to issues with link to existing mistake ticket in TCK module and potencionaly with using of external API.

The goal is to remove current functionality (archiving and creating of new document) and use historization instead (current record is updated only).
Following UCs has to be checked and updated:

	
- {MOD}01.110 Edit contract document 
	
- {MOD}01.113 Edit client document 
	
- 01.112 Edit DDM document 
	
- 13.200 Edit supplement document 
	
- 01.121 Update document service

## 📊 Appears In (1 diagrams)

- Custom: CBL-6367 (CLM-2082) Document data historization
