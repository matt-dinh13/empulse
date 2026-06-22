---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods"
domain: "Modules"
element_id: 1682949
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 UpdateDocument method replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods

## 📝 Notes

General notices to implementation of changes

The DMS PUT document-attributes can be used instead of the current UpdateDocument method. Generally, only Document Attributes can be added/ updated/ deleted. It also means, documentType and note properties cannot be accepted.

For more information about the method calling, see https://dms.id00a1.cz.infra/swagger/swagger-ui/index.html?configUrl=/swagger/api-docs/swagger-config#/Document%20Attribute/setDocumentAttribute

## 📊 Appears In (1 diagrams)

- Custom: CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods
