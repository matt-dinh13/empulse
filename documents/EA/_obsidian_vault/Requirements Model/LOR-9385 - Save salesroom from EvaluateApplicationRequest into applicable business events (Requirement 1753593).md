---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9368 - Update salesroom on application and contract via API"
domain: "Requirements Model"
element_id: 1753593
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9385 - Save salesroom from EvaluateApplicationRequest into applicable business events

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9368 - Update salesroom on application and contract via API

## 📝 Notes

As Loan Origination module, I need to be able to properly save the salesroomCode provided within the ApplicationManagementWS.EvaluateApplicationRequest into the applicable business events being created upon successful processing of such API request, so the external systems can consume such information in their own processes when it is needed.

Solution proposal:

	
- In case a valid salesroomCode is provided within the ApplicationManagementWS.EvaluateApplicationRequest, then save such salesroom into the CREATE_CONTRACT and APPLICATION_DATA_SUBMITTED business events.

## 🔗 Connections (1)

- → Realisation: [[LOR-9368 - Update salesroom on application and contract via API]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9368 - Update salesroom on application and contract via API
- Custom: LOR-9385 - Save salesroom from EvaluateApplicationRequest into applicable business events
