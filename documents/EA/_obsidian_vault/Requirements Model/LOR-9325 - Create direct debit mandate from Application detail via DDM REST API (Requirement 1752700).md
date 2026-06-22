---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1752700
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9325 - Create direct debit mandate from Application detail via DDM REST API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when creating the direct debit mandate on the Application detail screen, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- When saving the data from the Create DDM form, use the DDM REST API POST method for creating a new instance of a direct debit mandate draft.
- Impact to the 01.421 Create application DDM use case.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9325 - Create direct debit mandate from Application detail via DDM REST API
