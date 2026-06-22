---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions/CSI-1119 Use DMS in UC 08.356 Generate service request document"
domain: "Requirements Model"
element_id: 1879428
diagrams: 2
connections: 10
tags:
  - requirement
  - requirements-model
---

# 📋 Generate printout of document 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions/CSI-1119 Use DMS in UC 08.356 Generate service request document

## 📝 Notes

This object describes the steps, how system generates the printout file for selected document(s).

Input:

	
- Document [1..n] = object of respective document
   - DocumentDataSource = data source XML to be used for particular document when generating its printout file
   - DocumentPrintoutTemplateCode = code of a template to be used for the printout file generated for particular document
   - DocumentPrintoutFileName (optional) = name to be used for the printout file generated for particular document
   - NumberOfDocumentCopies (optional) = number of copies to be applied for particular document when generating the concatenated printout output
	
- OutputType = type of the printout output to be returned from the PrintServer system (SingleReport / ConcatenatedReport / SingleAndConcatenatedReport / CabinetReport) //'CabinetReport' option currently not supported.
	
- CollatedCopies (optional) = indication (boolean), whether the individual sub-parts of concatenated printout output should be collated (e.g. A, B, C, A, B, C) or non-collated (e.g. A, A, B, B, C, C) when multiple copies are requested for any document


Output:

	
- SingleDocumentPrintoutFile [0..n] = printout file generated for each single document separately
	
- ConcatenatedDocumentPrintoutFile [0..1] = printout file constructed by concatenating the individual documents together
	
- ErrorCode (optional) = code of the respective error, that caused the printout generating to fail


Steps:

	
- System takes the individual data from the input and generates the printout PDF file for each applicable Document as well as the concatenated printout file (constructed from such documents) when applicable based on the value of parameter (parameter.properties) reportConnectorVersion as follows:
a) If reportConnectorVersion = 'v3', then system calls the GenerateReportRequest (method of ReportWS (v3)) with following input parameters:
    - SystemId = 'HO'
    - UserId = ID of the currently logged user (User.Login)
    - Mode = 'LIVE'
    - Packaging = 'NORMAL'
    - OutputFormat= 'PDF'
    - Processing = 'SYNCHRONOUS'
    - ReportRequest.*

         //If OutputType = SingleReport:
         - SingleReportRequest.* //Constructed for each Document (ordered by the applicable Printout_Template.Sort_Order).
              - ReportTemplateName = DocumentPrintoutTemplateCode
              - ReportData = DocumentDataSource
              - RequestId = ID of the Document (Document.ID Document.ExternalID)
              - OutputFileName = DocumentPrintoutFileName
For every printed document(ordered by Printout Template.Sorting Order) ReportRequestDto contains:
         //If OutputType = ConcatenatedReport:
         - Collated = CollatedCopies
         - ConcatenatedReportRequest.* //Constructed for each Document (ordered by the applicable Printout_Template.Sort_Order).
              - ReportTemplateName = DocumentPrintoutTemplateCode
              - ReportData = DocumentDataSource
              - CopyCount = NumberOfDocumentCopies

         //If OutputType = SingleAndConcatenatedReport:
         - Collated = CollatedCopies
         - SingleAndConcatenatedReportRequest.* //Constructed for each Document (ordered by the applicable Printout_Template.Sort_Order).
              - ReportTemplateName = DocumentPrintoutTemplateCode
              - ReportData = DocumentDataSource
              - RequestId = ID of the Document (Document.ID Document.ExternalID)
              - OutputFileName = DocumentPrintoutFileName
              - CopyCount = NumberOfDocumentCopies

b) If reportConnectorVersion = 'v1', then system calls the GetReportRequest (method of ReportWS (v1)) with following input parameters instead:
    - SystemId = 'HO'
    - UserId = ID of the currently logged user (User.Login)
    - Mode = 'LIVE'
    - Packaging = 'NORMAL'
    - OutputFormat= 'PDF'
    - Processing = 'SYNCHRONOUS'
    - ReportRequest.* //Constructed for each Document (ordered by the applicable Printout_Template.Sort_Order).
         - Code = DocumentPrintoutTemplateCode
         - CopyCount = NumberOfDocumentCopies
         - OutputFileName = DocumentPrintoutFileName
         - RequestId = ID of the Document (Document.ID Document.ExternalID)
         - XMLData = DocumentDataSource
    - ResponseType = defined based on the OutputType ('PARTS' for SingleReport / 'CONCAT' for ConcatenatedReport / 'CONCAT_AND_PARTS' for SingleAndConcatenatedReport)
    - Collated = CollatedCopies

If calling the service fails due to any reason, algorithm ends with respective ErrorCode returned on the output.
	
- System takes each received printout file from the response and returns them to the calling object as following outputs:
   a) SingleDocumentPrintoutFile is represented by: //Based on the used endpoint version and applicable OutputType.
        - GenerateReportResponse.ReportResponse[SingleReportResponseListType].SingleReportResponse.FileData and .FileName
        - GenerateReportResponse.ReportResponse[SingleAndConcatenatedReportResponseType].SingleReportResponse.FileData and .FileName
        - GetReportResponse.ReportResponse.DocumentsDto.FileData and .FileName
   b) ConcatenatedDocumentPrintoutFile is represented by: //Based on the used endpoint version and applicable OutputType.
        - GenerateReportResponse.ReportResponse[ConcatenatedReportResponseType].SingleReportResponse.FileData and .FileName
        - GenerateReportResponse.ReportResponse[SingleAndConcatenatedReportResponseType].FileData and .FileName
        - GetReportResponse.ReportResponse.FileData and .FileName
	
- Algorithm ends.

## 🔗 Connections (10)

- ← Dependency: [[01.087 Print consent (UseCase 1821366)]]
- ← Dependency: [[01.435 Print DDM (UseCase 1876225)]]
- ← Dependency: [[01.189 Print client's documents (UseCase 1878525)]]
- ← Dependency: [[{MOD}01.183 Print documents for contract sign]]
- ← Dependency: [[{DEL}13.205 Create contract supplement documents]]
- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]
- ← Dependency: [[Generate content of agreement]]
- ← Dependency: [[03.045 Generate IS printout (UseCase 1879450)]]
- ← Dependency: [[03.040 Print selected version of IS (UseCase 1879436)]]
- ← Dependency: [[05.235 Generate payment order file printout (UseCase 1880967)]]

## 📊 Appears In (2 diagrams)

- Use Case: CSI-1119 Use DMS in UC 08.356 Generate service request document
- Use Case: Use DMS in 13.205 Create contract supplement documents
