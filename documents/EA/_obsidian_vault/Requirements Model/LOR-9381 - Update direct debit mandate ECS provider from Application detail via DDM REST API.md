---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1753249
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when updating the direct debit mandate on the Application detail screen, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- Create own copy of the Change ECS provider form (can be opened from Application detail screen) to be used within LOR domain only.
	
- Create own copy of the 01.427 Change DDM ECS provider use case to be used within LOR domain only.
	
- When saving the data from the Change ECS provider form, use the DDM REST API PUT method for updating the ECS provider on the existing instance of direct debit mandate or direct debit mandate draft.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API
