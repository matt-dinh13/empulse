---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication"
domain: "Modules"
element_id: 1801245
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 createCommunication

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/createCommunication

## 📝 Notes

{ADD CLM-5344/}

https://clc.in00a1.cz.infra/swagger/swagger-ui/index.html#/2.%20Client%20communication%20V1/createCommunication
POST
ENV_URL/rest/v1/communication/clc

This API serves to create communication record. related to client and/or contract.
To use this endpoint please request role with PRI.COMMUNICATION.CREATE privilege.

## 🔗 Connections (5)

- → Dependency: [[ClcCommunication]]
- → Dependency: [[ClcCreateCommunication]]
- ← Dependency: [[Get communication detail]]
- ← Dependency: [[{ADD}07.040 Create communication record]]
- ← Dependency: [[{ADD}Create communication via API]]

## 📊 Appears In (1 diagrams)

- Logical: createCommunication
