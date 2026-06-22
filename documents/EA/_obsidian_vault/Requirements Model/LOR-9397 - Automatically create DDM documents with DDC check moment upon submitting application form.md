---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1753906
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9397 - Automatically create DDM documents with DDC check moment upon submitting application form

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to automatically create the required DDM documents when a new direct debit mandate is being created upon submitting the application from, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- When a new direct debit mandate is being created upon submitting the application from (GUI and ApplicationManagementWS), create the required DDM documents with 'DDC' check moment automatically. //As the contract code might not be known for PAYM module in some cases, this logic cannot be easily moved in there right now - some extensive analysis with the countries needs to be done first, so this can be moved into PAYM module in the future.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9397 - Automatically create DDM documents with DDC check moment upon submitting application form
