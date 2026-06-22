---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773432
diagrams: 1
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Document validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- documentTypeCode – must be value of Document Type.Code validate according to Document cross validation rule //Not applicable for ApplicationManagementWS_v22 and later
	
- note //Not applicable for ApplicationManagementWS_v22 and later
	
- documentAttributes – each record is validated according to DocumentAttribute validation rule //Not applicable for ApplicationManagementWS_v22 and later
	
- photoTakingResult – must be value of Photo Taking Result.Code. If document is part of any document container (evaluated according to the rule Get document containers for applicable client scoring segment), value of this attribute is mandatory for DocumentContainer.documentTypes.photoAcquiringCode in ('PCM', 'PIM', 'PUM'). //Not applicable for ApplicationManagementWS_v22 and later
	
- content – mandatory if filename is not null or empty //Not applicable for ApplicationManagementWS_v19 and later.
Note: Uploading of content for the documents of types with some Document Type Page Specification defined (i.e. Document->Document_Type->Document_Type_Page_Specification exists) is forbidden in following WS:
   - ApplicationManagementWS_v18 and older,
   - ApplicationDocumentManagementWS_v3 and older.
	
- filename – File name validation, mandatory if content is not null //Not applicable for ApplicationManagementWS_v22 and later
	
- verification – each record is validated according to Verification validation rule, with all mandatory attributes //Not applicable for ApplicationManagementWS_v22 and later


	
- UUID 
– must exist in Client Document.UUID on appropriate contract validate according to Document cross validation rule //Not applicable for ApplicationManagementWS_v22 and later
- must exists in Document.UUID. If the validation is not met then MSG_DOCUMENT_DOESNT_EXIST is returned.  //applicable for ApplicationManagementWS_v22 and later
	
- attribute relation type is mandatory for UpdateApprovedRequest (for version v22 and later) for other methods the relation type is ignored


	
- contentFiles.file – not more than one record is allowed when no Document Type Page Specification is defined for respective document type, each record is validated according to the rule File validation rule //Not applicable for ApplicationManagementWS_v22 and later

## 🔗 Connections (7)

- → Dependency: [[Get document containers for applicable client scoring segment]]
- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[File name validation]]
- → Dependency: [[File validation rule]]
- → Dependency: [[DocumentAttribute validation rule]]
- → Dependency: [[Verification validation rule]]
- → Dependency: [[Document cross validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
