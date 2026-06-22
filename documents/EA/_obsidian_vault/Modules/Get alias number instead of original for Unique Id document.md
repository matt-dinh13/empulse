---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Business Rules"
domain: "Modules"
element_id: 1799868
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get alias number instead of original for Unique Id document

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Business Rules

## 📝 Notes

Description: 
Rule describing getting of alias number (called "UID_Token") of original "UNIQUE ID" personal document's number (called "DOC_ID"). (Note: Used in India.)

Input:
- docType - personal document - "UNIQUE ID"
- docID - original "UNIQUE ID" personal document number

Output: 
- uidToken - alias of docID used for security reasons in India

Steps: 

	
- Send FindDocumentRequest via DocumentManagementWS where
-- document.type = docType
-- document.attribute.type = "DOC_ID"
-- document.attribute.value = docID
	
- Get uidToken =  FindDocumentResponse.document.attribute.value where attribute.type = "UID_Token" and document.type = "UNIQUE_ID"
- if FindDocumentResponse.document.attribute.value is null or empty string then system displays message MSG_CouldNotGetUidToken (e.g. "System did not get UID Token number.")
- if FindDocumentFault received then system displays message MSG_DocumentNotFound (e.g. "System wasn't able to get" + FindDocumentFault.document.type + "document correctly." )
	
- Return uidToken

## 🔗 Connections (1)

- ← Dependency: [[{MOD}06.040 Search Clients (UseCase 1843996)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Client Search
