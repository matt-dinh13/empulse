---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Business Rules"
domain: "Analysis Model"
element_id: 1811727
diagrams: 2
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Update document instance

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Business Rules

## 📝 Notes

{DEL LOR-9211/}
Input (note: see related request for mandatoriness):

	
- applicationCode
	
- (document) uuid
	
- (document) file
	
- (document) attributes


Scenario

	
- System tries to find an application with code matching the applicationCode. In case no such application is found, systemreturns error 'INVALID_APPLICATION_CODE' and this rule ends.
	
- In case the user identified against the WS does not have the privilege XY_AllApplications assigned (where XY is number of calling UC) and rule check that user is assigned to the same salesroom with the user and salesroomCode (i.e. Contract[Code=applicationCode].Salesroom) on input returns FALSE then system returns error 'INSUFFICIENT_PRIVILEGE' and this rule ends.
	
- System checks, that application is in status Approved ('S'). If not, system returns error 'INVALID_APPLICATION_STATUS' and this rule ends.
	
- System tries to find a document for application found in previous step using uuid (i.e. Contract->Client_Document/Contract_Document[.UUID=uuid]->Document). In case no such document is found, system returns error 'INVALID_DOCUMENT_UUID' and this rule ends.
	
- When document is client identification document (has flag READ_ONLY) and request contains attributes, system returns error 'INVALID_DOCUMENT_DATA' and this rule ends.
	
- System performs the following validations of input data:
a) System validates, that each attribute.*:
   - type is defined and active for selected document type (must be value of Document_Type_Attribute.Code)
   - value satisfies the validation settings in Document_Type_Attribute.Custom_Data_Definition, Add/Edit document validations and country specific document validation
b) System validates each file.* according to the rule File validation rule. //Applicable for WS v4 and later.

If any validation fails, system returns error 'INVALID_DOCUMENT_DATA' and each validation has its own validationError constructed according to Create validation error message. All validations are always performed even if any of them fails. Then this rule ends.
	
- System updates the document:
a) if the attribute exists for the document, the value is updated
b) otherwise new attribute with the value is created
	
- If request contains any file, then system performs the following steps for each one of them:
8.1.   System checks if there is a DMS_File for the content of respective document page linked to the document already (i.e. Document->Document_DMS_File[.File_Type='FILE' AND .Page_Specification=file.pageSpecificationCode]->DMS_File exists). If not, a new DMS_FILE entity (of respective file type and page specification) is created for the document.
8.2.   System stores the obtained content and filename into the respective DMS_File entity (see DMS file creation rule) and sets its Upload_In_Progress_Flag = TRUE.
8.3.   System saves the file into the document archive (invokes the 01.009 Upload file to document archive use case asynchronously).
	
- Use case ends.

## 🔗 Connections (6)

- → Dependency: [[01.009 Upload file to document archive (UseCase 1851469)]]
- → Dependency: [[Add_Edit document validations]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- ← Dependency: [[{DEL}01.179 Upload document file]]
- ← Dependency: [[{DEL}01.174 Update document]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: LOR-9211 Remove ApplicationDocumentManagementWS
