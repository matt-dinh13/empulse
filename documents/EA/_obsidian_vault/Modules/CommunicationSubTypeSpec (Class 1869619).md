---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypeSpec"
domain: "Modules"
element_id: 1869619
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 CommunicationSubTypeSpec

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypeSpec

## 📝 Notes

Purpose:
This API returns a list of active communication subtype specifications based on the selected communication subtype. It is used to populate the “Subtype specification” dropdown on the Create Communication form.



HTTP Method	GET

	
- Resource URI: {base_url}/rest/v1/communication/codelist/sub-type-spec
	
- Authentication: Required (e.g., Bearer Token or Session)
	
- Response Format: application/json
	
- Request Format: Query parameters



Query parameters

	
- subTypeCode - string	



Response mapping:


	
- HO.BSL_COMM_SUBTYPE_SPEC.CODE	= content[].code	
	
- HO.BSL_LABEL.VALUE	 = content[].name	
	
- HO.BSL_COMM_SUBTYPE_SPEC.ACTIVE_FLAG = content[].active

## 🔗 Connections (3)

- → Dependency: [[CommunicationCodeListResponse]]
- → Dependency: [[queryParams (Class 1869620)]]
- ← Realisation: [[Get communication codeList]]

## 📊 Appears In (1 diagrams)

- Logical: getCommunicationSubTypeSpec
