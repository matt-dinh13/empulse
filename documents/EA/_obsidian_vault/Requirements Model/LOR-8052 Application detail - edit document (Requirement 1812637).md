---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8052 Application detail - edit document"
domain: "Requirements Model"
element_id: 1812637
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8052 Application detail - edit document

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8052 Application detail - edit document

## 📝 Notes

As a system, when editing document attributes I will get and store data to document using DMS.

Proposed solution

	
- get document attributes using GET /rest/v2/documents/{documentUuid}
- field validation can be retrieved from /rest/v2/document-types with projections = ATTRIBUTE_EXTENDED and activeOnly = false (because we can display document that is deactivated)
- definition in dataType and ruleTypes
- local attributes names can be retrieved by adding header, e.g. Accept-Language: id


	
- store document attributes using PUT /rest/v2/documents/{documentUuid}/document-attributes
- display any errors from the PUT response


	
- add tests for Application/Client document tab, Edit

## 🔗 Connections (1)

- → Realisation: [[LOR-6766 DMS - Integrate Document management component in HoSel system (Requirement 1820832)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-8052 Application detail - edit document
