---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchChannels"
domain: "Modules"
element_id: 1801258
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 searchChannels

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchChannels

## 📝 Notes

{ADD CLM-4856/}
https://clc.id00a1.cz.infra/swagger/swagger-ui/index.html#/3.%20Client%20communication%20channels%20V1/searchChannels

To use this API, the user must have one of the following privileges:

	
- CLC_COMMUNICATION_RO


	
- CLC_COMMUNICATION_RO_SENSITIVE_DATA -  to have sensitive contact data included

## 🔗 Connections (3)

- → Dependency: [[CommunicationChannel (Class 1801373)]]
- → Dependency: [[queryParams (Class 1800320)]]
- ← Dependency: [[{ADD}Search channels (UseCase 1852850)]]

## 📊 Appears In (1 diagrams)

- Logical: searchChannels
