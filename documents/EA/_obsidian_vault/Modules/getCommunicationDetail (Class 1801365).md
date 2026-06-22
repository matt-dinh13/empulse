---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getCommunicationDetail"
domain: "Modules"
element_id: 1801365
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 getCommunicationDetail

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getCommunicationDetail

## 📝 Notes

{ADD CLM-4781/}

https://clc.ph00a1.cz.infra/swagger/swagger-ui/index.html#/Client%20composite%20communication%20V1/getCommunicationDetail

GET 
ENV_URL/rest/v1/communication/clc/{communicationId}


This API serves to get communication records from CLC system. To use this API, the user must have one of the following privileges:

	
- CLC_API_RO
	
- CLC_API_RO_SENSITIVE_DATA -  to have sensitive contact data included

## 🔗 Connections (2)

- → Dependency: [[ClcCommunicationRecord]]
- ← Dependency: [[Get communication detail]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationDetail
