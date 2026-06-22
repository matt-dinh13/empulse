---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchCommunication"
domain: "Modules"
element_id: 1801391
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 searchCommunication

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchCommunication

## 📝 Notes

{ADD CLM-4800/}

https://clc.id00a1.cz.infra/swagger/swagger-ui/index.html#/Client%20composite%20communication%20V1/searchCommunication

GET 
ENV_URL/rest/v1/communication

This API serves to get communication records from internal and external communication. To use this API, the user must have one of the following roles:

	
- CLC_COMMUNICATION_RO
	
- CLC_COMMUNICATION_RO_SENSITIVE_DATA -  to have sensitive contact data included


(!) In case user has none of the above roles assigned, the individual APIs (e.g. searchTypes) return a 403 error with message "You do not have sufficient rights to perform this operation."

Results are limited to 1 year ago max or 1000 (in PH environment only 500) records per system, whichever comes first. The following application parameters govern this:

	
- app.param.commHistory.maxNumOfRecords: 1000
	
- app.param.commHistory.oldestRecords: 1Y

## 🔗 Connections (3)

- → Dependency: [[CompositeCommunicationRecord (Class 1813978)]]
- → Dependency: [[queryParams (Class 1801374)]]
- ← Dependency: [[{MOD}Search communication]]

## 📊 Appears In (1 diagrams)

- Logical: searchCommunication
