---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5168 (CLM-2062) External Refinance contract closure information"
domain: "Requirements Model"
element_id: 1418150
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Store Closure information for External refinanced contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5168 (CLM-2062) External Refinance contract closure information

## 📝 Notes

Goal of this task is to record information about refinanced external contract (the loan consolidation process) under consolidation contract. Steps:
 

	
- Create new table for Closure information linked to the Refinanced contract
	
- Modify the Contract detail - refinanced contract screen with new "Contract closure" column
	
- Create a new function to setting info about external contract closure by authorized user via Contract detail - refinanced contract screen
	
- Create a web service to get and set the contract closure info



ClosureCertificate scan will be stored in standard way in ContractDocuments tabs, a new document type with parameters "External Contract Number" + "Bank name" + "Date of certificate" will be used.
Manual update of Closure status + Closure date will be possible only if document with particular "External Contract Number" exists including uploaded file. 
New global parameters DOC_REFIN_CLOSURE_TYPE and DOC_REFIN_CLOSURE_ATTR is used for storing of used DocumentType and AttributeName.

## 📊 Appears In (1 diagrams)

- Custom: CBL-5168 (CLM-2062) External Refinance contract closure information
