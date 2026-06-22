---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9397 - Automatically create DDM documents with DDC check moment upon submitting application form"
domain: "Requirements Model"
element_id: 1821076
diagrams: 2
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Create documents for new application DDM automatically

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9397 - Automatically create DDM documents with DDC check moment upon submitting application form

## 📝 Notes

//This logic shall be ideally moved into PAYM module itself once an equivalent of a documentation configuration (applicable for DDM documents) is finally created in there.
This object describes the steps, how system automatically creates applicable DDM documents for a new direct debit mandate to be associated with selected application.

Input:
- ApplicationCode = unique identifier of the application (associated with the newly created direct debit mandate)

Output:
- DocumentUUID [0..*] = unique identifier of the created DDM document
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode from the input and finds all document types, for which a new document is required to be created upon creating a new direct debit mandate, defined by the following configuration:
   - (Contract->)Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Profile->Product_Profile_2_Documentation_Configuration->Documentation_Configuration->Product_Profile_Document_Rule[.Document_Type=DocumentType]->Profile_Document_Rule_Check_Moment->Check_Moment_Type.Code = 'DDC' //Where the particular Contract/Temporary_Application record is identified by the respective ApplicationCode
      AND
   - Document_Type[.Code=DocumentType]->Document_Type_Flag.Type = 'DDM' //i.e. Related to DDM
.
	
- System creates a new instance of a document for each applicable document type (identified within the previous step) according to the rule Create document with respective DocumentType and DocumentData[CreationMoment] = 'DDC' on the input.
In case of failure (i.e. when ErrorCode is returned on the rule's output), system returns the respective ErrorCode to the calling object and algorithm ends.

Note: If any of the document types is paperless only (i.e. has 'PAPERLESS' flag assigned), then the respective document is created only on the Paperless salesroom.
.
	
- System takes each DocumentUUID retrieved within the previous step and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (4)

- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- → Dependency: [[Paperless salesroom]]
- → Dependency: [[{ADD}Create document]]
- ← Dependency: [[Save application DDM data]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9397 - Automatically create DDM documents with DDC check moment upon submitting application form
- Custom: Operations with application DDM
