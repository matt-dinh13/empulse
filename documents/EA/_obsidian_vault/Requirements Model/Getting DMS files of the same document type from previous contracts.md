---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics"
domain: "Requirements Model"
element_id: 1878888
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Getting DMS files of the same document type from previous contracts

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics

## 📝 Notes

This rule returns DMS files of the same document type with the same DOC_ID attribute from previous client's contracts.
This rule replaces previous rule  Getting document's DMS file UUID 

Pre-requisite:
Global database parameter SEARCH_FOR_DMS_IN_PREV_CON = True

Input:
Document fulfilling criteria:

	
- Document -> Document DMS File[File Type = FILE] does not exist
	
- Document -> Document Proof Check.ActiveYN = True where Document -> Document Proof Check.Proof Check Type IN (ADDRESS_PROOF, IDENTIFICATION_PROOF)


Output:
DMS files, if any was found based on criteria.

Steps:

	
- System searches for registered contracts of the selected client, which have Contract.RegistrationStatus = R and order them in descendent order by Contract -> Registration Status Transition.Creation Date. 
If there is no registered contract, then the rule returns null and the scenario ends.
	
- For each found contract system searches for contract document fulfilling criteria:
- Document. Type = Input Document.Type
- Document -> Document Atributes.DOC_ID  = Input Document Atributes.DOC_ID
- Document -> Document DMS File[File Type = FILE] exists (one or more records)
If document is found, then the rule returns found DMS files and scenario ends.
	
- If document is not found, then the rule returns null and the scenario ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Generate documents list for contract registration]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8156 (CSI-164) Integration with Inovatrics - using PageSpecification in GUI (step3a)
- Custom: Common Business Rules for Contract Management
