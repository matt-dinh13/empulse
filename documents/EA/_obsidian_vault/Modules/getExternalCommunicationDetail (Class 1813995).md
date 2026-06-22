---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getExternalCommunicationDetail"
domain: "Modules"
element_id: 1813995
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 getExternalCommunicationDetail

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getExternalCommunicationDetail

## 📝 Notes

{ADD CLM-4781/}

https://clc.in00a1.cz.infra/swagger/swagger-ui/index.html#/Client%20composite%20communication%20V1/getExternalCommunicationDetail

GET 
ENV_URL/rest/v1/communication/{systemCode}/{communicationId}


This API serves to get communication records from an external system. To use this API, the user must have one of the following privileges:

	
- CLC_API_RO
	
- CLC_API_RO_SENSITIVE_DATA -  to have sensitive contact data included

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Get external communication detail]]
- ← Dependency: [[Get communication detail]]
- → Dependency: [[CompositeCommunicationRecord (Class 1813978)]]
- → Dependency: [[System (Enumeration 1813993)]]

## 📊 Appears In (1 diagrams)

- Logical: getExternalCommunicationDetail
