---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-4406 - COMA - expose endpoints for work with document"
domain: "Modules"
element_id: 1800799
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4406 - COMA - expose endpoints for work with document

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-4406 - COMA - expose endpoints for work with document

## 📝 Notes

Developer notes
Exposed V12 with limited set of attribues / views when we are hopefully sure that belongs to contract.

Attributes exposed in V12 should be 1:1 with attributes what come into Kafka event. Kafka event was therefore also extended and should be tested together with V12.

Kafka event should be generated on document creation / removal - actually not tested, but should be automatic 

New REST endpoints
GET​/rest​/v12​/contracts - UC.CONTRACTS.SEARCH
GET​/rest​/v12​/contracts​/{contractCode} - UC.CONTRACTS.READ
GET​/rest​/v12​/contracts​/{contractCode}​/services - UC.CONTRACT_SERVICES.READ
GET​/rest​/v12​/contracts​/{contractCode}​/product - UC.CONTRACT_PRODUCT.READ
GET​/rest​/v12​/contracts​/{contractCode}​/customer - UC.CONTRACT_CUSTOMER.READ
GET​/rest​/v12​/contracts​/{contractCode}​/commodities - UC.CONTRACT_COMMODITIES.READ
GET​/rest​/v12​/contracts​/{contractCode}​/documents - UC.CONTRACT_DOCUMENTS.READ
POST​/rest​/v12​/contracts​/{contractCode}​/documents - UC.CONTRACT_DOCUMENTS.CREATE
POST​/rest​/v12​/contracts​/{contractCode}​/documents​/{documentId} - UC.CONTRACT_DOCUMENTS.CREATE
DELETE​/rest​/v12​/contracts​/{contractCode}​/documents​/{documentId} - UC.CONTRACT_DOCUMENTS.DELETE

Contract document creation flow

	
- Calls in parallel
- contract existence in DB - fails with CONTRACT_NOT_FOUND
- document should not be assigned to some contract in DB - fails with CONTRACT_DOCUMENT_ALREADY_ATTACHED_TO_SOME_CONTRACT
- get all documents assigned to contract for given contract from DB
- get document type from DMS - fails with CONTRACT_DOCUMENT_NOT_FOUND
	
- Call DMS with set of contract documents that are already on contract and type we are trying to add
- When some document is returned then fails with CONTRACT_DOCUMENT_TYPE_ALREADY_ATTACHED_TO_CONTRACT
- When no document is present then inserts new contract 2 document relation into DB (document ID should be also filled as disableDocumentIdFilling is everywhere disabled)

## 📊 Appears In (1 diagrams)

- Custom: CLM-4406 - COMA - expose endpoints for work with document
