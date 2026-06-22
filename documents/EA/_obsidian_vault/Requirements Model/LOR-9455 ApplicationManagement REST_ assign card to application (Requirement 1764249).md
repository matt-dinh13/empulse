---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9455 ApplicationManagement REST: assign card to application"
domain: "Requirements Model"
element_id: 1764249
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9455 ApplicationManagement REST: assign card to application

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9455 ApplicationManagement REST: assign card to application

## 📝 Notes

As Loan Origination module, I need to enable the external systems to assign card to an Application and prepare/sign an Application's Agreement using new REST API.

Solution proposal:
Implement new PATCH (/applications/{code}/card) methods on ApplicationManagementREST endpoint handling assignCardToApplication UC

	
- Unit tests
	
- AT for the respective method
	
- Migration guide record
	
- Swagger documentation

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9455 ApplicationManagement REST: assign card to application
