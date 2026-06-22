---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchTypes"
domain: "Modules"
element_id: 1801266
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 searchTypes

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchTypes

## 📝 Notes

{ADD CLM-4856/}
https://clc.id00a1.cz.infra/swagger/swagger-ui/index.html#/4.%20Client%20communication%20types%20V1/search

To use this API, the user must have one of the following privileges:

	
- CLC_COMMUNICATION_RO


	
- CLC_COMMUNICATION_RO_SENSITIVE_DATA -  to have sensitive contact data included

## 🔗 Connections (3)

- → Dependency: [[queryParams (Class 1801432)]]
- → Dependency: [[CommunicationType (Class 1801431)]]
- ← Dependency: [[{ADD}Search types (UseCase 1852855)]]

## 📊 Appears In (1 diagrams)

- Logical: searchTypes
