---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8053 Application detail - add document"
domain: "Requirements Model"
element_id: 1807336
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8053 Application detail - add document

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8053 Application detail - add document

## 📝 Notes

As a system, I will store added document using DMS.

Proposed solution
When selecting list of document types for drop down use /rest/v2/document-types

	
- with activeOnly = true (only currently active document type can be added)
	
- use projection=FULL
- list of attributes contain validations in dataType and ruleTypes
- filter document type based on flag - CONTRACT for Application documents, PERSON for client documents
- local attributes names can be retrieved by adding header, e.g. Accept-Language: id{}
	
- when form with document is submitted, use /rest/v2/documents to store it in DMS, then create relation between document and application (contract2document or clientdocuments)
	
- add tests for Application/Client document tab

## 🔗 Connections (1)

- → Realisation: [[LOR-6766 DMS - Integrate Document management component in HoSel system (Requirement 1820832)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-8053 Application detail - add document
