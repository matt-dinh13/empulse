---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResults"
domain: "Modules"
element_id: 1874319
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationResults

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResults

## 📝 Notes

Purpose:
This API returns a list of active communication results for use in the “Result” dropdown on the Create Communication form.
It supports an optional input parameters:

	
- channel
	
- subtype
	
- status

— to filter the results.
If none of above values are provided, the API returns all active communication results. 

API details:

	
- HTTP Method:  GET


	
- Resource URI:  {base_url}/rest/v1/communication/codelist/result


	
- Authentication:	Required (e.g., Bearer Token or Session)


	
- Response Format:	application/json


	
- Request Format:	Query parameters


Query parameters:
channel - string
subType	 - string
status - string


DB to API response mapping:

•	HO.BSL_COMMUNICATION_RESULT_TYPE.CODE → content[].resultTypeCode
•	HO.BSL_LABEL.VALUE (joined via HO.BSL_COMMUNICATION_RESULT_TYPE.VALUE) → content[].name


Description:

	
- HO.BSL_COMM_RESULT_DEFINITION – mapping table that links subtype, channel, and status to result type
	
- HO.BSL_COMMUNICATION_RESULT_TYPE – defines the communication result type code and label reference
	
- HO.BSL_LABEL – provides localized or descriptive label for each result type

## 🔗 Connections (3)

- ← Realisation: [[Get communication codeList]]
- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1874320)]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationResults
