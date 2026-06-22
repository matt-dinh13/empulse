---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing/LOR-9007 Create installment schedule when offer chosen for application"
domain: "Requirements Model"
element_id: 1822826
diagrams: 10
connections: 20
tags:
  - requirement
  - requirements-model
---

# 📋 Application Processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing/LOR-9007 Create installment schedule when offer chosen for application

## 📝 Notes

- System creates object of Deal, object of Contract and objects of related structures if they don't exist and fills attributes of those objects with values from temporary structures.
- If objects already exist, system will update them - for all entities associated with the application and with the multiplicity greater then 1, system tries to find identical records. If identical record is found, it is updated, otherwise new record is created. User statistics are always created as a new record.
- applicant data are stored: 
      - in Client Snapshot. At the time of storing the Client Snapshot, full name of the client is created by Concatenate person name rules and stored (Client Snapshot.Full Name). Except: beneficiary related person
      -  {DEL LOR-9883}if parameter useApplicantInPif =True, then{/DEL} applicant is also stored in PIF
- At the time of storing the Employer, system browse current records and compares all their attributes with the employer from processed application. If matching employer is found, a reference to such record is stored. Otherwise new employer record is created. If the parameter (parameter.properties) useDDMRest = TRUE and repayment is non-DDM (OTHER), then system removes any DDM UUID related to application (Contract To DDM).
	
- Data that are stored as relationships in Party structure: 
- When Temporary_Application.Salesman exists, then system creates/updates relationship type SALESMAN
- When Temporary_Application->External_identifiers.Key = APPLICANT_ID exists, then system creates/updates relationship type APPLICANT
	
- If the parameter (parameter.properties) useDDMRest = FALSE, then system retrieves the data of the application's repayment payment channel (if there is any) according to the rule Get application payment channel by its purpose with ApplicationCode and PaymentChannelPurpose = 'RE' on the input. 
In case of failure (i.e. when ErrorCode is returned on the rule's output), system displays the respective error message (defined by the returned ErrorCode) and use case ends.
	
- If the parameter (parameter.properties) useDDMRest = FALSE and the application's repayment payment channel is of a Direct debit type (i.e. PaymentChannel[.purpose='RE'].type = 'DD'), then system performs the following sub-steps:

5.1.  In case the direct debit mandate record does not exist on the application yet (i.e. Contract->DDM does not exist), then system creates one and uses it for saving the data from the application form (if there are any). Otherwise system updates the existing DDM record with those data from the application form.


5.2.  System sets the following direct debit mandate attributes:
   - DDM.Status = 'NEW'
   - DDM.Code = value set according to the rule Algorithm: Generate DDM code
   - DDM->Bank_Account.Holder_Type = '3P'
   - If DDM->Bank_Account->Bank_Branch->Bank.DD_Type in ('ECS', 'ACH'), then system sets DDM_Draft.ECS_Provider according to the rule Algorithm: ALG_ECS_PROVIDER
   - if DDM->Bank_Account->Bank_Branch->Bank.DD_Type = 'DD', then system sets DDM.DD_Provider = DDM->Bank_Account->Bank_Branch->Bank.DD_Provider

5.3.  System creates a new instance of document for each document type defined by the following configuration:
   - Contract->Product->Product_Profile->Product_Profile_2_Documentation_Configuration->Documentation_Configuration->Product_Profile_Document_Rule[.Document_Type=DocumentType]->Profile_Document_Rule_Check_Moment->Check_Moment_Type.Code = 'DDC'
      AND
   - Document_Type[.Code=DocumentType]->Document_Type_Flag.Type = 'DDM' //i.e. Related to DDM

Once created, system links the documents to the processed direct debit mandate (using the DDM->DDM_Document relation), and sets Document.When_Created = 'DDC' and Document.Creation_Date = sysdate.
If any of the document types is paperless only (i.e. has 'PAPERLESS' flag assigned), then the respective document is generated only on the Paperless salesroom.
.
	
- System updates Offer_Card_Service (OCS):
a) OCS.Issue_method = TempAppl_Card.Issue_method
b) OCS.Salesroom =Temporary_Application->TempAppl_Card->Salesroom (if this value is null, use value in Temporary_Application->Salesroom)
c) OCS.Emboss_Name =Temporary_Application->TempAppl_Card->Emboss_Name
	
- System generates offer installments - see Generate offer installment
	
- System creates the objects of documents (if they are not created already) associated with the entity determined by the Document_Type_Flag as follows:
   - For TempAppl_Document->Document_Type->Document_Type_Flag = 'CONTRACT' system creates Contract->Contract_Document->Document
   - For TempAppl_Document->Document_Type->Document_Type_Flag = 'PERSON' system creates Contract->Deal->Client_Snapshot->Client_Document->Document
   - If the parameter (parameter.properties) useDDMRest = FALSE, then for TempAppl_Document->Document_Type->Document_Type_Flag = 'DDM' system creates Contract->DDM->DDM_Document->Document 
In case any document has more than one of the flags listed above, then system creates just one instance of the corresponding Document but associates it with all applicable entities.

Note: System does not create the documents for the TempAppl_2_Document records this way, as those has been already created via the DMS endpoint previously.
.
	
- System evaluates, if there are any document types required by the configuration of the selected product for the respective Check_Moment_Type determined according to the rule Determine Check moment type flag (i.e. Contract->Product->Product_Profile->Product_Profile_2_Documentation_Configuration->Documentation_Configuration->Product_Profile_Document_Rule[.Document_Type=DocumentType]->Profile_Document_Rule_Check_Moment->Check_Moment_Type.Code = Check_Moment_Type) with the exception of consent documents (i.e. Document_Type->Document_Type_Flag.Type = 'CONSENT') and if the parameter (parameter.properties) useDDMRest = TRUE, then also with the exception of DDM documents (i.e. Document_Type->Document_Type_Flag.Type = 'DDM').
In case there is any document (of any of those required document types) still missing on the application (system browses the instances of Contract_Document, Client_Document and if the parameter (parameter.properties) useDDMRest = FALSE, then also the instances of DDM_Document), then system creates such document, links it with the application via the applicable entity and sets Document.When_Created = Check_Moment_Type.
	
- System checks photo of the client - if a client's photo (Client_Document->Document.Flag = 'PERSON' and 'PHOTO') was created and its content was stored, system also creates thumbnail (see Thumbnail creation) of the photo and creates relation to original photo (DMS_File.Thumbnail_File).
	
- System check photo of documents - if a object of document was created (see creation of documents object above) and its photo was saved in TempAppl_Document->TempAppl_DMS_File->DMS_File, then system saves the photo of document to Document->Document_DMS_File->DMS_file
	
- If any photos of documents exist for the contract and at least one of the following conditions is met:
   a) CUID of the client (i.e. Contract->Client_Snapshot->Client.CUID) is known.
   b) Parameter (parameters.properties) uploadDocFilesWithoutCUID = TRUE.
then system sends each such photo to Cabinet by calling the use case 01.009 Upload file to document archive with input parameters set according to the rule Parameters for document file upload (or Set parameters for file upload if the parameter (parameters.properties) uploadDocFilesWithoutCUID = FALSE) and only the DMS_FILE_ID (i.e. with no DMS_File content) on the input. Then the same use case 01.009 Upload file to document archive is invoked asynchronously with the same input parameters and the DMS_File content on top of that. Following documents are considered:
   - related to the contract (Contract->ContractDocument->Document->Document_DMS_File->DMS_file)
   - related to client (ClientSnapshot->ClientDocument->Document->Document_DMS_File->DMS_file)
   - related to additional person (Person->PersonDocument->Document->Document_DMS_File->DMS_file)
	
- If the Marketing Offer is offered in cooperation with join lender (i.e. Offer.jointLendingPartnerCode is not null), then system saves such joint lender to Party structure and its percentage share to Relationship attribute (percentage share is taken from enumeration Joint Lender
	
- In case some product offer is already selected for the processed application (i.e. Contract->Offer_Financial_Parameters[.Chosen=TRUE] exists), then system saves the primary lender (party with major financing share to be owning the respective contract) according to the rule Save Lender from offer to application with processed application (ApplicationCode) and selected product offer (OfferCode) on the input.
	
- System triggers system event ApplicationDataSubmittedSE

## 🔗 Connections (20)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- → Dependency: [[Save application payment channel data]]
- → Dependency: [[Parameters for document file upload]]
- → Dependency: [[Generate offer installment]]
- → Dependency: [[01.009 Upload file to document archive (UseCase 1851469)]]
- → Dependency: [[Thumbnail creation]]
- → Dependency: [[Set Contract registration status]]
- → Dependency: [[{MOD}Find identical records]]
- → Dependency: [[Algorithm_ Generate DDM code]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Dependency: [[Set parameters for file upload]]
- → Dependency: [[Get application payment channel by its purpose]]
- → Dependency: [[Concatenate person name rules]]
- → Dependency: [[{MOD}ALG_ECS_PROVIDER]]
- → Dependency: [[DMS File creation rule]]
- → Dependency: [[Determine Check moment type flag]]
- → Dependency: [[Save Lender from offer to application]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (10 diagrams)

- Custom: LOR-9007 Create installment schedule when offer chosen for application
- Custom: LOR-9073 Save CEL reward payment channel data from GUI application form via PAYM API
- Custom: LOR-9145 - Revamp customer loan journey
- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9179 Archive relation between application and DDM on AF
- Custom: LOR-9699 AF: Beneficiary panel
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Custom: Product business rules
- Use Case: Contract origination
- Use Case: Fill in application
