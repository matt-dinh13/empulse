---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)"
domain: "Requirements Model"
element_id: 1745378
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9173 Implement search method

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)

## 📝 Notes

As Loan Origination module, I need to enable the external systems to search Application using new REST API.

Solution proposal:

	
- Implement new GET (/applications/search) method on ApplicationManagementREST endpoint handling search UC
	
- add paging info to response if possible
- Unit tests
- Playwright steps preparation
- Migration guide record
- Swagger documentation

## 🔗 Connections (1)

- → Realisation: [[LOR-9105 Create a new attribute for SOB (Selling On Board)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9105 Create a new attribute for SOB (Selling On Board)
- Custom: LOR-9173 Implement search method
