---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8056 Application detail - set document proof check"
domain: "Requirements Model"
element_id: 1804053
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8056 Application detail - set document proof check

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8056 Application detail - set document proof check

## 📝 Notes

As a system, when adding proof check, it will be stored as document attributes using DMS.

Proposed solution

	
- get document attributes using GET /rest/v2/documents/{documentUuid}
- field validation can be retrieved from /rest/v2/document-types with projections = ATTRIBUTE_EXTENDED and activeOnly = false (because we can display document that is deactivated)
- displays field for attribute PROOF_CHECK 
- local attributes names can be retrieved by adding header, e.g. Accept-Language: id
	
- store document attributes using PUT /rest/v2/documents/{documentUuid}/document-attributes 

Relates to client documents only

## 🔗 Connections (1)

- → Realisation: [[LOR-6766 DMS - Integrate Document management component in HoSel system (Requirement 1820832)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-8056 Application detail - set document proof check
