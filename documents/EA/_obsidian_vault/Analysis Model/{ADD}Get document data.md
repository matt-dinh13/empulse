---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with documents"
domain: "Analysis Model"
element_id: 1878490
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get document data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with documents

## 📝 Notes

{ADD INCVN-8980/}
//Note, that this is a rule dedicated to LOR domain only!
This object describes the steps, how system gets the data of the specific document.

Input:
- DocumentUUID = unique identifier of the document

Output:
- Document [0..1] = object of the respective document
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the DocumentUUID from the input and gets the data of the corresponding document by calling the respective REST API provided by the DMS module (i.e. GET GetDocumentRequest) with following input parameters:
   - documentUuid = DocumentUUID

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested document, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received Document from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.160 Search client]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with documents
