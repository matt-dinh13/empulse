---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods"
domain: "Modules"
element_id: 1682951
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 UploadDocumentFile method replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods

## 📝 Notes

General notices to implementation of changes

The DMS POST document-files (Create document files) method is called instead of the UploadDocumentFile. The contractCode isn't applied as input parameter here. It is supposed, the Document is already assigned to a business object (e.g. Contract) - see CreateDocument method replacement description - so only Document uuid is used for identification.
Against the current UploadDocumentFile, the new DMS method allows to add some metadata to the uploaded file (fileCustomData).
For more information about the new API see https://dms.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/Document%20File/createDocumentFiles

## 📊 Appears In (1 diagrams)

- Custom: CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods
