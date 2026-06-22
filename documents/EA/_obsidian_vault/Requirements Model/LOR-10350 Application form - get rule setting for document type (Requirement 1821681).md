---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-10350 Application form - get rule setting for document type"
domain: "Requirements Model"
element_id: 1821681
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-10350 Application form - get rule setting for document type

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-10350 Application form - get rule setting for document type

## 📝 Notes

As a system, I will get rule setting of document type using DMS API.

Proposed solution

	
- for getting document type rule setting use /rest/v2/document-types
- use projection=FULL
	
- response contains in ruleType
	
- use cache for calling DMS

## 🔗 Connections (1)

- → Realisation: [[LOR-6766 DMS - Integrate Document management component in HoSel system (Requirement 1820832)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-10350 Application form - get rule setting for document type
