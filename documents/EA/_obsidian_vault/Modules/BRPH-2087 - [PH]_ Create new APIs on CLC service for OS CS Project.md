---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-29618 - Create new APIs on CLC for OS CS project"
domain: "Modules"
element_id: 1881205
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 BRPH-2087 - [PH]: Create new APIs on CLC service for OS CS Project

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-29618 - Create new APIs on CLC for OS CS project

## 📝 Notes

Development of  a set of REST API endpoints under the CLC (Client Communication) service that will provide codelist (dropdown) values required for creating a new communication entity in the OSS frontend form.
These APIs will return code + name pairs and other attributes specified in reuirement per API, used as selectable values in the UI dropdowns when creating or editing a communication record.

List of new services (REST endpoints):
 

	
- /rest/v1/communication/codelist/channel
	
- /rest/v1/communication/codelist/type
	
- /rest/v1/communication/codelist/sub-type
	
- /rest/v1/communication/codelist/sub-type-spec
	
- /rest/v1/communication/codelist/sub-type-sub-spec
	
- /rest/v1/communication/codelist/result
	
- /rest/v1/communication/codelist/result-type-part
	
- /rest/v1/communication/codelist/result-value

## 📊 Appears In (1 diagrams)

- Custom: CBL-29618 - Create new APIs on CLC for OS CS project
