---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/searchCommunication"
domain: "Analysis Model"
element_id: 1707521
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}searchCommunication

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/searchCommunication

## 📝 Notes

{ADD CLM-4941/}

https://clc.id00a1.cz.infra/swagger/swagger-ui/index.html#/Client%20composite%20communication%20V1/searchCommunication

GET 
ENV_URL/rest/v1/communication

This API serves to get communication records from internal (System = CLC) and external communication. To use this API, the user must have one of the following roles:

	
- CLC_COMMUNICATION_RO
	
- CLC_COMMUNICATION_RO_SENSITIVE_DATA -  to have sensitive contact data included


Results are limited to 1 year ago max or 1000 (in PH environment only 500) records per system, whichever comes first. The following application parameters govern this:

	
- app.param.commHistory.maxNumOfRecords: 1000
	
- app.param.commHistory.oldestRecord: 1Y

## 🔗 Connections (2)

- → Dependency: [[queryParams (Class 1707515)]]
- → Dependency: [[CompositeCommunicationRecord (Class 1707513)]]

## 📊 Appears In (1 diagrams)

- Logical: searchCommunication
