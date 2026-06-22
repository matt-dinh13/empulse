---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)"
domain: "Requirements Model"
element_id: 1745379
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9174 Implement getAgreement method

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)

## 📝 Notes

As Loan Origination module, I need to enable the external systems to get an Application's Agreement using new REST API.

Solution proposal:

	
- Implement new GET (/applications/{code}/agreement) method on ApplicationManagementREST endpoint handling getAgreement UC
	
- remove GetAgreementResponse -> documents -> printoutContent
	
- add GetAgreementResponse -> documents -> uuid (UUID of respective document)
- Unit tests
- Playwright steps preparation
- Migration guide record
- Swagger documentation

## 🔗 Connections (1)

- → Realisation: [[LOR-9105 Create a new attribute for SOB (Selling On Board)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9105 Create a new attribute for SOB (Selling On Board)
- Custom: LOR-9174 Implement getAgreement method
