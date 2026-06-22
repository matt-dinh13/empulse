---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationTypes"
domain: "Modules"
element_id: 1869628
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationTypes

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationTypes

## 📝 Notes

This API returns a list of active communication types based on the channel from input.
It is used to populate the Type dropdown on the “Create Communication” form.
The endpoint either requires a channel code (passed in a query param) to filter results, otherwise it returns list of ALL ACTIVE comm. Types.

Endpoint Details:

	
- HTTP Method: GET


	
- Resource URI: {base_url}/rest/v1/communication/codelist/type


	
- Authentication: Required (e.g., Bearer Token or Session)
	
- Response Format: application/json
	
- Request Format: Query parameters



Response Codes:

200 OK
• Description: Request processed successfully
• Notes: Returns matching communication types for the provided channelCode.
400 Bad Request
• Description: Invalid query parameter or missing channelCode
• Notes: Check if channelCode parameter is present and valid.
401 Unauthorized
• Description: Authentication failure
• Notes: Invalid or missing credentials.
404 Not Found
• Description: No matching communication types found
• Notes: The provided channel has no active types.
500 Internal Server Error
• Description: Unexpected server error
• Notes: System or database failure.
Note:
If the provided channelCode has no active types assigned, the API returns HTTP 200 response with an empty content[] array instead of 404 response.


HTTP 200 OK Response mapping:

	
- HO.BSLCOMMUNICATION_TYPE.CODE = content[].code
	
- HO.BSL_LABEL.VALUE =  content[].name

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1869629)]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationTypes
