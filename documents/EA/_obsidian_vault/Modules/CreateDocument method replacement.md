---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods"
domain: "Modules"
element_id: 1682950
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 CreateDocument method replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods

## 📝 Notes

General notices to implementation of changes

The DMS POST documents method (Create document) can be used. As you can see, the original contractCode and relatedTo input parameters are not used here so an integration will looks as follow:

	
- As the first step, a Document has to be created in the DMS.
	
- Next step is association the Document with a business object (PERSON, CONTRACT, or DDM). For example of a document to a contract association, you can use COMA create contract document.

Against the current CreateDocument SOAP method, DMS Create document method allows attach a file content(s) to the created document.

Additional info to relatedTo (PERSON, CONTRACT, DDM) replacement
This input parameter doesn't exist on any new component API so you cannot choose in an API which object type  (i.e. PERSON, CONTRACT, or DDM) will be referenced to Document. 
It means, reference between Document and respective object type has to be created by calling respective object API (e.g. If you need to assign a Document to Contract, you have to use COMA API operation to do it).

For more information see

	
- document creation: https://dms.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/Document/createDocument
	
- document to contract association: https://coma.in00c1.in.infra/swagger/swagger-ui/index.html?configUrl=%2Fswagger%2Fapi-docs%2Fswagger-config#/1.%20Contracts%20V12/createContractDocuments

## 📊 Appears In (1 diagrams)

- Custom: CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods
