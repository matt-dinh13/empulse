---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9502 ApplicationManagement REST: update application"
domain: "Requirements Model"
element_id: 1764268
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9502 ApplicationManagement REST: update application

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9502 ApplicationManagement REST: update application

## 📝 Notes

As external system, I need to update application for 2BoD

Solution proposal:

	
- create PATCH method /application/{applicationCode}
	
- behavior is equivalent to SOAP UpdateApplication
	
- use same object as for create and evaluate (POST) and get application data (GET)

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9502 ApplicationManagement REST: update application
