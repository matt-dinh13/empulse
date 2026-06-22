---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods"
domain: "Modules"
element_id: 1682946
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetDocumentsForRegistration method replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods

## 📝 Notes

General notices to implementation of changes

The original GetDocumentsForRegistration method is supposed to be replaced by a REM REST API GET /registration/contracts/{contractCode}/documents
Reason: There are needed documents associated with various types of business object for the registration process, e.g. Client's documents, Contract documents, DDM documents.
Caller would have to know all sources of needed documents, that can be problem.

Supposed integration for GetDocumentsForRegistration method replacement will look as follow:

	
- the requestor calls REM API GET /registration/contracts/{contractCode}/documents. This method returns all Document data related to the contract and intended for the registration.


For more information about getting

	
- documentUuids for the registration of the provided contract https://rem.in00c1.in.infra/swagger/webjars/swagger-ui/index.html#/1.%20Contract%20Registrations%20V1/getDocuments

## 📊 Appears In (1 diagrams)

- Custom: CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods
