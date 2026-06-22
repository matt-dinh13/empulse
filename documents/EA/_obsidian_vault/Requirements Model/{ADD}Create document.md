---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9325 - Create direct debit mandate from Application detail via DDM REST API"
domain: "Requirements Model"
element_id: 1878491
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Create document

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9325 - Create direct debit mandate from Application detail via DDM REST API

## 📝 Notes

//Note, that this is a rule dedicated to LOR domain only!
This object describes the steps, how system creates a new document.

Input:
- DocumentTypeCode = code of the applicable document type
- DocumentData = relevant data of the document to be created [CreationMoment]


Output:
- DocumentUUID [0..1] = unique identifier of the document
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System creates a new document by calling the respective REST API provided by the DMS module (i.e. POST CreateDocumentRequest) with following input parameters:
   - typeCode = DocumentTypeCode
   - creationMoment = DocumentData[CreationMoment]
   - attributes.*
      - code = 
      - value = 
   - files.*
      - fileTypeCode = 
      - pageSpecificationCode = 
      - filePartName = 
      - fileName = 
      - businessActor = 
      - fileCustomData.*
         - code = 
         - value = 

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on its type as follows - in case the creation of the document failed due to any reason (i.e. response with other .code than '200' (OK) is returned), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received Document.uuid from the response and returns it as DocumentUUID to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[Create documents for new application DDM automatically]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9325 - Create direct debit mandate from Application detail via DDM REST API
- Custom: Operations with documents
