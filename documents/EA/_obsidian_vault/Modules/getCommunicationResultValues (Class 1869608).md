---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResultValues"
domain: "Modules"
element_id: 1869608
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationResultValues

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResultValues

## 📝 Notes

GET Communication Result Value List
Resource URI: {base_url}/rest/v1/communication/codelist/result-value

Purpose

This API returns a list of all active communication result values based on the selected result type part.
It is used to populate the “Result value” dropdown on the Create Communication form.
Each result value is associated with a specific result type part, allowing dynamic filtering of selectable options.

API Details:HTTP Method - GET

Authentication - Required (e.g., Bearer Token or Session)

Response Format - application/json

Request Format - Query parameters

Request Parameters
resultTypePart - string	

Response Codes

	
- 200 OK	Request processed successfully
	
- 400 Bad Request	Missing or invalid resultTypePart parameter
	
- 401 Unauthorized	Authentication failure
	
- 404 Not Found	No matching result values found for the provided resultTypePart
	
- 500 Internal Server Error	Unexpected server error




Response Body (HTTP 200)

	
- content = array<object>	Array containing communication result value objects
	
- content[].code = string	Unique code identifier of the result value
	
- content[].name = string	Display name or label of the result value
	
- count = integer	Number of items returned in the content array
	
- timestamp = string (date-time)	


DB to JSON Mapping

	
- HO.BSL_COMMUNICATION_RES_VALUE.CODE = content[].code
	
- HO.BSL_LABEL.VALUE = content[].name

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1869607)]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationResultValues
