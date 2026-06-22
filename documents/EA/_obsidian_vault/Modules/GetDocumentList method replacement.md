---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods"
domain: "Modules"
element_id: 1682948
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetDocumentList method replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods

## 📝 Notes

General notices to implementation of changes

The DMS GET documents (Get document), or possibly Find document methods can be used. As you can see, contractCode and cuid (Customer identifier) input parameters are not used here and you must know Document uuid (identifier) so supposed integration will look as follow:

	
- As the first step, it is needed to get Document uuid(s) related to business object (PERSON, CONTRACT, or DDM). For an example of obtaining contract documents, you will call COMA get contract document
	
- Returned Document uuid(s) is subsequently used for getting Document(s) from DMS. Two approaches can be used for getting Document data:
- you need to get data of a specific Document, you can use DMS Get document method
- you need to get all Documents belonging a business object (e.g. Contract), you can use DMS Find document method, and possible to filter inputted Document uuids with additional criteria (e.g. document type, document type flag)


For more information about

	
- getting contract documents see https://coma.in00c1.in.infra/swagger/swagger-ui/index.html?configUrl=%2Fswagger%2Fapi-docs%2Fswagger-config#/1.%20Contracts%20V12/getContractDocuments
	
- getting a document data based on document uuid see https://dms.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/Document/getDocument
	
- getting document data when additional filtering is required see https://dms.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/Document/findDocument

## 📊 Appears In (1 diagrams)

- Custom: CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods
