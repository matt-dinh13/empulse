---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResultTypesPart"
domain: "Modules"
element_id: 1869603
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationTypesPart

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResultTypesPart

## 📝 Notes

Purpose
This API returns a list of communication result type parts based on the provided result type code.
It is used to dynamically populate the “Result Type Part” dropdown when a result type is selected on the Create Communication form.
Only active parts are returned.

Endpoint Details

	
- HTTP Method: GET
	
- Resource URI: {base_url}/rest/v1/communication/codelist/result-type-part
	
- Authentication: Required (e.g., Bearer Token or Session)
	
- Response Format: application/json
	
- Request Format: Query parameters


Description:

	
- HO.BSL_COMMUNICATION_RESULT_TYPE – defines result type (input parameter source)
	
- HO.BSL_COMM_RESULT_TYPE2PART – mapping table connecting result type to its parts
	
- HO.BSL_COMM_RESULT_TYPE_PART – contains definition of result type parts
	
- HO.BSL_LABEL – provides localized or descriptive labels for part values


Database to JSON Mapping:

	
- HO.BSL_COMM_RESULT_TYPE_PART.CODE = content[].code	
	
- HO.BSL_COMM_RESULT_TYPE_PART.LOGICAL_DATATYPE_CODE = content[].logical_datatype_code
	
- HO.BSL_LABEL.VALUE = content[].name

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryparams]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationResultTypesPart
