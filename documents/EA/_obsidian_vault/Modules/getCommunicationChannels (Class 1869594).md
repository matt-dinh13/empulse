---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationChannels"
domain: "Modules"
element_id: 1869594
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationChannels

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationChannels

## 📝 Notes

This API returns a list of communication channels for use in the Channel drop-down on the “Create Communication” form.
It supports optional filters such as purpose type, contact type, activity status, and direction type.
If no filters are applied, the API returns all available active channels.

HTTP Method: GET
Resource URI: {base_url}/rest/v1/communication/codelist/channel
Authentication: Required (e.g., Bearer Token or Session)
Response Format: application/json
Request Format: Query parameters



DB source for CommunicationChannel data:

SELECT cc.code,
       cc.value AS name,
       cc.contact_type,
       cc.direction_type,
       cc.purpose_type,
       cc.active_flag
  FROM ho.bsl_communication_channel cc
  JOIN ho.bsl_label lb ON lb.code = cc.value
WHERE 1=1
   [AND cc.purpose_type = :purposeType]
   [AND cc.contact_type = :contactType]
   [AND cc.active_flag = :active]
   [AND cc.direction_type = :directionType];

Note: Filters in brackets are included only when corresponding query parameters are provided.

Database to JSON Mapping:
 

	
- HO.BSL_COMMUNICATION_CHANNEL.CODE → content[].code
Example Value: "ITWTR"


	
- HO.BSL_LABEL.VALUE → content[].name
Example Value: "Incoming Twitter"


	
- HO.BSL_COMMUNICATION_CHANNEL.CONTACT_TYPE → content[].contact_type
Example Value: "EMAIL"


	
- HO.BSL_COMMUNICATION_CHANNEL.DIRECTION_TYPE → content[].direction_type
Example Value: "IN"


	
- HO.BSL_COMMUNICATION_CHANNEL.PURPOSE_TYPE → content[].purpose_type
Example Value: "CLIENT"


	
- HO.BSL_COMMUNICATION_CHANNEL.ACTIVE_FLAG → content[].active
Example Value: "Y"

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1869595)]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationChannels
