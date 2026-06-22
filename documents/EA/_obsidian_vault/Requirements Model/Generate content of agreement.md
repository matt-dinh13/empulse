---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration"
domain: "Requirements Model"
element_id: 1879427
diagrams: 5
connections: 12
tags:
  - requirement
  - requirements-model
---

# 📋 Generate content of agreement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration

## 📝 Notes

Input:

	
- Document [1..n] = object of a document


Steps:

	
- For each Document from the input, system prepares the respective data source as follows:
1.1.   If the global parameter HoContractDataFromDSM = TRUE, then system retrieves the HO_CONTRACT_DATA data source by calling the respective REST API provided by the DSM module (i.e. POST Generate) with following input parameters: //Selected language of the current user is provide within the HTTP headers.
   - dataSources.code = 'HO_CONTRACT_DATA'
   - dataSources.correlationId = random unique identifier (UUID)
   - dataSources.contractCode = Contract.Contract_Code
1.2.   If the global parameter HoContractDataFromDSM = FALSE, then system generates the HO_CONTRACT_DATA data source according to the applicable XSD types by getting the individual data directly from the respective sources.
1.3.  System retrieves the HO_DIRECT_DEBIT_MANDATE_FORM data source (when it is needed for some of the documents) by calling the respective REST API provided by the DSM module (i.e. POST Generate) with following input parameters: //Selected language of the current user is provide within the HTTP headers.
  - dataSources.code = 'HO_DIRECT_DEBIT_MANDATE_FORM'
   - dataSources.correlationId = random unique identifier (UUID)
   - dataSources.applicationCode = Contract.Contract_Code
1.5.   System generates the HO_CONSENT_DATA data source (when it is needed for some of the documents) according to the applicable XSD types by getting the individual data directly from the respective sources.

General rules:
   - If any XSD contains a photo of person or document, use case 01.008 Download file from document archive is called.
   - If any XSD contains data managed by other modules, system gets them according to rule Get data for data source generation from other modules. 
If any of the requests fails, then the error message MSG_GetDataSourceDataFailure is displayed and use case ends.

Note: If the global parameter DataSourceParallelProcessing = TRUE, applicable interfaces from the List of interfaces called in parallel are all called in parallel at once (instead of sequentially one after another).

IN-specific rule:
System calls the gstCalculations method provided directly by GST external system in order to get the data about goods and services taxes (if there are any applicable tariff items) as well as about the applicable tax office (if there are no applicable tariff items) eventually.

If any error occurs, the system display MSG_GetDataSourceDataFailure and use case ends.
.
	
- If not created yet, system creates a new object of Agreement_Data_Source with following attributes for each of the data sources prepared in previous steps:
   - Code = code of the used XSD type (i.e. HO_CONTRACT_DATA etc.)
   - Content = generated data source in XML format
and associates them with the processed Agreement (i.e. Contract->Agreement->Agreement_Data_Source).
Otherwise system simply updates the existing objects with respective data.
	
- System generates the printout for each Document from the input as well as for the whole contract documentation according to the rule Generate printout of document with following parameters on the input:
   - Document = Document
        - DocumentDataSource = applicable data source prepared in previous steps (Contract->Agreement->Agreement_Data_Source.Content)
        - DocumentPrintoutTemplateCode = Contract->Product->Product_Document_Printout[.Document_Type_Code=Document->Document_Type.Code]->Printout_Template.External_Code
        - DocumentPrintoutFileName = Document->Document_Type.Name + "_Printout"
        - NumberOfDocumentCopies = Contract->Product->Product_Document_Printout[.Document_Type_Code=Document->Document_Type.Code].Number_Of_Copies
   - OutputType = SingleAndConcatenatedReport
   - CollatedCopies = value of global parameter PrintDocCollated

Respective printouts are returned on the rule's output (as SingleDocumentPrintoutFile and ConcatenatedDocumentPrintoutFile). In case of failure (i.e. when any ErrorCode is returned on the rule's output), system rollbacks all the already performed steps, displays error message MSG_0378 and use case ends.
	
- For every document part (SingleDocumentPrintoutFile) received within the response and based on parameter prepareDocumentation.createDocumentsInDMS:
a) if parameter is TRUE, system stores the file to documents via DMS API
b) System
  -- checks if the given Document has relation to a printout DMS_File (i.e. Document->[Printout]DMS_File). If not, a new DMS_File is created for the document. Otherwise, the printout DMS_File is obtained.
  -- stores obtained file and file name (from SingleDocumentPrintoutFile) in DMS_File entity (see DMS file creation rule) and sets uploadInProgress_Flag = TRUE.
  -- sends the file to document archive by calling the use case 01.009 Upload file to document archive with input parameters set according to the rule Parameters for document file upload (or Set parameters for file upload if the parameter (parameters.properties) uploadDocFilesWithoutCUID = FALSE) and only the DMS_FILE_ID (i.e. with no DMS_File content) on the input. Then the same use case 01.009 Upload file to document archive is invoked asynchronously with the same input parameters and the DMS_File content on top of that.
	
- System stores contract documentation (ConcatenatedDocumentPrintoutFile) to related Agreement (Contract->Agreement.Printed_Contract_PDF).

## 🔗 Connections (12)

- ← Dependency: [[01.148 Validate verification code for client's documentation]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]
- → Dependency: [[01.009 Upload file to document archive (UseCase 1851469)]]
- → Dependency: [[Set parameters for file upload]]
- → Dependency: [[DMS File creation rule]]
- → Dependency: [[Generate printout of document]]
- → Dependency: [[Parameters for document file upload]]
- → Dependency: [[01.008 Download file from document archive (UseCase 1851467)]]
- → Dependency: [[List of interfaces called in parallel]]
- → Dependency: [[Get data for data source generation from other modules]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-8484 GSTCalculatorService direct integration
- Custom: LOR-8969 - Remove global parameter HO_DDM_FORM_FROM_DSM
- Custom: LOR-9063 - Remove temporary switch useDirectGstIntegration
- Custom: LOR-9186 Upload contractual documentation via DMS
- Use Case: Prepare documentation to sign
