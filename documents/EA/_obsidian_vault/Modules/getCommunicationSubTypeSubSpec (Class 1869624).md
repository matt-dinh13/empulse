---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypeSubSpec"
domain: "Modules"
element_id: 1869624
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 getCommunicationSubTypeSubSpec

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypeSubSpec

## 📝 Notes

Purpose:
This API returns a list of all active communication subtype-subspecifications based on the selected subtype-specification.
It is used to populate the Subtype Subspecification dropdown on the Create Communication form.
The endpoint requires an input query parameter subTypeSpecification to filter the returned results.
API details:
 

	
- HTTP Method	GET
	
- Resource URI	{base_url}/rest/v1/communication/codelist/sub-type-sub-spec
	
- Authentication	Required (e.g., Bearer Token or Session)
	
- Response Format	application/json
	
- Request Format	Query parameters


Response mapping:
 

	
- HO.BSL_COMM_SUBTYPE_SUB_SPEC.CODE	= content[].code	

HO.BSL_LABEL.VALUE	 = content[].name

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1869623)]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationSubTypeSubSpec
