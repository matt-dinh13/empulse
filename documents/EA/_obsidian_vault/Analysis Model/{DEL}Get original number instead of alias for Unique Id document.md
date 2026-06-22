---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail"
domain: "Analysis Model"
element_id: 1813858
diagrams: 6
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Get original number instead of alias for Unique Id document

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail

## 📝 Notes

{DEL LOR-9883/}
Description: 
Rule describes getting "DOC_ID" number instead of "UID_Token" number which is used as "DOC_ID" alias for "UNIQUE ID" client documents in India.

Input: 
- docType - personal document type "UNIQUE ID" used in India
- uidToken - alias used for original "UNIQUE ID" document number

Output:
- docId

Steps: 

	
- Send FindDocumentRequest via DocumentManagementWS
-- document.type = docType
-- document.attribute.type = "UID_Token"
-- document.attribute.value = uidToken (UNIQUE ID document number is stored in secured Document module, system can use only UNIQUE ID document number alias called UID Token)
	
- Get documentNumber =  FindDocumentResponse.document.attribute.value where attribute.type = "DOC_ID" and document.type = "UNIQUE_ID"
- if FindDocumentResponse.document.attribute.value is null or empty string then system displays message MSG_CouldNotGetDocumentNumber (e.g. "System did not get document number.")
- if FindDocumentFault received then system displays message MSG_DocumentNotFound (e.g. "System wasn't able to get" + FindDocumentFault.document.type + "document correctly.")
	
- Return docId

## 🔗 Connections (2)

- ← Dependency: [[{MOD}06.030 Show Client Data]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (6 diagrams)

- Custom: Client detail
- Custom: Contract detail
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Custom: Search clients
- Use Case: Client management
- Use Case: Contract detail
