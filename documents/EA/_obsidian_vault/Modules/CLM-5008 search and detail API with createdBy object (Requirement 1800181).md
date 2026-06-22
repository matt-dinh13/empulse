---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-5008 search and detail API with createdBy object"
domain: "Modules"
element_id: 1800181
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 CLM-5008 search and detail API with createdBy object

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-5008 search and detail API with createdBy object

## 📝 Notes

Replace attribute createdBy, originatedBy and event -> assignedTo with object:

"createdBy": {
            "uid": "string",
            "employeeNumber": "string",
            "commonName": "string"
          } 
Rename attribute dateCreated to creationDate and also sort by dateCreated to creationDate .
 

	
- dateCreated -> creationDate in comm rec DTO
	
- creationDate in sortBy att in search comm req query params
	
- createdBy in get ext comm & search (only common name)
	
- createdBy inner structure in event > assignedTo and in originatedBy

## 📊 Appears In (1 diagrams)

- Custom: CLM-5008 search and detail API with createdBy object
