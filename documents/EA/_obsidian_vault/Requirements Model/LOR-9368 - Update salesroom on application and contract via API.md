---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9368 - Update salesroom on application and contract via API"
domain: "Requirements Model"
element_id: 1753589
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9368 - Update salesroom on application and contract via API

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9368 - Update salesroom on application and contract via API

## 📝 Notes

Why:
To allow external systems to update the Temporary_Application.Salesroom_Code and Contract.Salesroom_Code when updating the application via API (i.e. when filling the online 2BoD application form), so the selected features using the salesroom from those structures like reporting etc. are kept backwards compatible even for the new business process, where 1BoD application form is filled in via GMA app, and such process can be therefore delivered to production on-time with no need for doing adjustments cross several local apps and processes right away.

What:

	
- Update the ApplicationManagementWS.UpdateApplication and ApplicationManagementWS.UpdateAndEvaluateApplication methods (v22 only)as follows:
- Introduce a new temporary switch controlling the behaviour of the respective API methods in a way, that in case such temporary switch is enabled and any salesroomCode is provided within the corresponding request, then the its value is saved also into Temporary_Application.Salesroom_Code and Contract.Salesroom_Code. Otherwise the system behaves as it does now.
- Enable the respective temporary switch in ID.
	
- Deactivate the calculation of salesPoints[].numApprovedPOS LAP vector fullpath (i.e. BSL_VECTOR_CONFIGURATION.CODE='SALESPOINTS_NUMAPPROVEDPOS') in ID.

## 🔗 Connections (2)

- ← Realisation: [[LOR-9371 - Update salesroom on application and contract via API (Requirement 1753592)]]
- ← Realisation: [[LOR-9385 - Save salesroom from EvaluateApplicationRequest into applicable business events (Requirement 1753593)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9368 - Update salesroom on application and contract via API
