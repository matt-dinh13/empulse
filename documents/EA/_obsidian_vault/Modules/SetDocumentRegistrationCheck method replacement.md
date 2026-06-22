---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods"
domain: "Modules"
element_id: 1682947
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 SetDocumentRegistrationCheck method replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods

## 📝 Notes

General notices to implementation of changes

The DMS document-attributes (Set document attribute) can be used for the replacement.
Supposed scenario:

	
- First, the documents for registration related to given contract should be obtained - see GetDocumentsForRegistration method replacement
	
- The returned document uuids for registration from the previous call can be used to call the DMS document-attributes


The direct DMS document-attributes calling for setting of the registration check can bring some issues:

	
- Caller has to know the code of attribute used as registration check (implementation detail knowledge)
	
- If all documents for registration are needed to be marked as checked, caller has to call the mentioned API for each document to registration.


Solution of these issue would be to expose special (custom) service for the registration flag setting by CLM.

Prerequisite: The task of CSI-1127 DMS - Registration check as Document Attribute has to be developed.

For more information about DMS method calling see also:
https://dms.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/Document%20Attribute/setDocumentAttribute

## 📊 Appears In (1 diagrams)

- Custom: CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods
