---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypes"
domain: "Modules"
element_id: 1869616
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationSubTypes

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypes

## 📝 Notes

Purpose:
This API returns a list of active communication subtype specifications based on the selected communication subtype. It is used to populate the “Subtype specification” dropdown on the Create Communication form.

HTTP Method	GET

	
- Resource URI	{base_url}/rest/v1/communication/codelist/sub-type
	
- Authentication	Required (e.g., Bearer Token or Session)
	
- Response Format	application/json
	
- Request Format	Query parameters



Request Parameters (Query Parameters):

	
- typeCode (string)
	
- The code of the communication type for which the list of subtypes is requested.


Response Body (HTTP 200):

	
- content	array<object>	
	
- content[].code	string	
	
- content[].name	string	
	
- count	integer	
	
- timestamp	string (date-time)




Response body Mapping:
 

	
- HO.BSL_COMMUNICATION_SUBTYPE.CODE = content[].code


	
- HO.BSL_LABEL.VALUE = content[].name


	
- HO.BSL_COMMUNICATION_SUBTYPE.ACTIVE_FLAG = content[].active

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1869615)]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationSubTypes
