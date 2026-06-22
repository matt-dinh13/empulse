---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)"
domain: "Requirements Model"
element_id: 1745376
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9172 Implement prepareAgreement + signAgreement methods

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)

## 📝 Notes

As Loan Origination module, I need to enable the external systems to assign card to an Application and prepare/sign an Application's Agreement using new REST API.

Solution proposal:

	
- Implement new POST (/applications/{code}/agreement) methods on ApplicationManagementREST endpoint handling prepareAgreement UC
	
- Implement new POST (/applications/{code}/agreement/sign) methods on ApplicationManagementREST endpoint handling signAgreement UC

## 🔗 Connections (1)

- → Realisation: [[LOR-9105 Create a new attribute for SOB (Selling On Board)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9105 Create a new attribute for SOB (Selling On Board)
- Custom: LOR-9172 Implement prepareAgreement + signAgreement methods
