---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationStatus"
domain: "Modules"
element_id: 1869611
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationStatus

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationStatus

## 📝 Notes

Purpose:
This API returns a list of active communication statuses for use in the “Status” dropdown on the Create Communication form.
It supports an optional input parameter — selected communication channel — to filter relevant statuses for that channel.
If no channel is provided, the API returns all active communication statuses.

API details:

	
- HTTP Method	GET
	
- Resource URI	{base_url}/rest/v1/communication/codelist/status
	
- Authentication	Required (e.g., Bearer Token or Session)
	
- Response Format	application/json
	
- Request Format	Query parameters


Query Parameters:
channel - string

Response Codes 

	
- HTTP Status	Description
	
- 200 OK	Request processed successfully.
	
- 400 Bad Request	Invalid query parameter or value.
	
- 401 Unauthorized	Authentication failure.
	
- 404 Not Found	No matching communication statuses found.
	
- 500 Internal Server Error	Unexpected server error.



Response body Mapping:

	
- HO.BSL_COMMUNICATION_STATUS.CODE = content[].code


	
- HO.BSL_LABEL.VALUE = content[].name



Response Codes

	
- 200 OK	Request processed successfully
	
- 400 Bad Request	Missing or invalid channel parameter
	
- 401 Unauthorized	Authentication failure
	
- 404 Not Found	No matching communication statuses found for the given channel
	
- 500 Internal Server Error	Unexpected server error


Response Body (HTTP 200)
Attribute	Data Type
content	= array<object>
content[].code = string
content[].name = string
count = integer
timestamp = string (date-time)

SQL example:
  select distinct cs.code, cs.channel_code, lb.value as name 
    from HO.BSL_communication_status cs
    join ho.bsl_communication_channel cc on cc.code = cs.channel_code
    join ho.bsl_label lb on lb.code = cs.value
    where cs.active_flag = 1 
    and cs.channel_code = 'CICH';

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1869612)]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationStatus
