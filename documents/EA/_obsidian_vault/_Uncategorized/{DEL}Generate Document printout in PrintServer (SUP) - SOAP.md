---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1870142
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 {DEL}Generate Document printout in PrintServer (SUP) - SOAP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{DEL DOBA-156 /}
This rule describes the steps, how system generates the printout file for selected document(s) in the PrintServer SOAP version).

Input:

	
- Document [1..n] -- object of respective document to print
- DocumentExternalId -- Document identifier
- DataSource -- data source XML to be used for particular document when generating its printout file
- PrintoutTemplateCode -- code of a template to be used for the printout file generated for particular document
- PrintoutFileName (optional) -- name to be used for the printout file generated for particular document
- NumberOfDocumentCopies (optional) -- number of copies to be applied for particular document when generating the concatenated printout
	
- OutputType -- SINGLE, CONCATENATE, BOTH (SingleReport / ConcatenatedReport / SingleAndConcatenatedReport)
	
- ConcatenatedFileName (optional) - mandatory if ReportType = BOTH or CONCATENATE
	
- CollatedCopies (optional) -- indication (boolean), whether the individual sub-parts of concatenated printout output should be collated (e.g. A, B, C, A, B, C) or non-collated (e.g. A, A, B, B, C, C) when multiple copies are requested for any document


Output:

	
- SingleDocumentPrintoutFile [0..n] -- printout file generated for each single document separately
	
- ConcatenatedDocumentPrintoutFile [0..1] -- printout file constructed by concatenating the individual documents together
	
- ErrorCode (optional) -- code of the respective error, that caused the printout generating to fail


Steps:

	
- System calls the GenerateReportRequest (method of ReportWS (v3)) with following input parameters:
    - SystemId = 'SUP'
    - UserId = ID of the currently logged user (User.Login)
    - Mode = 'LIVE'
    - Packaging = 'NORMAL'
    - OutputFormat= 'PDF'
    - Processing = 'SYNCHRONOUS'
    - ReportRequest.*
         //If OutputType = SingleReport:
         - SingleReportRequest.* //Constructed for each Document (ordered by the applicable Printout_Template.Sort_Order).
              - ReportTemplateName = PrintoutTemplateCode
              - ReportData = DataSource
              - RequestId = Document.ExternalID
              - OutputFileName = PrintoutFileName
         //If OutputType = ConcatenatedReport:
         - Collated = CollatedCopies
         - ConcatenatedOutputFileName = ConcatenatedFileName
         - ConcatenatedReportRequest.* //Constructed for each Document (ordered by the applicable Printout_Template.Sort_Order).
              - ReportTemplateName = PrintoutTemplateCode
              - ReportData = DataSource
              - CopyCount = NumberOfDocumentCopies
         //If OutputType = SingleAndConcatenatedReport:
         - Collated = CollatedCopies
         - ConcatenatedOutputFileName = ConcatenatedFileName
         - SingleAndConcatenatedReportRequest.* //Constructed for each Document (ordered by the applicable Printout_Template.Sort_Order).
              - ReportTemplateName = PrintoutTemplateCode
              - ReportData = DataSource
              - RequestId = DocumentExternalID
              - OutputFileName = PrintoutFileName
              - CopyCount = NumberOfDocumentCopies
	
- If calling the service fails due to any reason, algorithm ends with respective ErrorCode returned on the output.
	
- System returns ReportResponse object as following outputs: -- Based on OutputType.
   a) SingleReportResponseListType is represented by: 
        - .SingleReportResponse.[FileData; .FileName; .RequestId]  -- list of report objects     
   b) ConcatenatedReportResponseType is represented by: 
        - .SingleReportResponse.[FileData; .FileName; .RequestId] -- one report object
   c) SingleAndConcatenatedReportResponseType is represented by
         - .SingleReportResponse.[FileData; .FileName; .RequestId] -- list of report objects
         - .FileData -- concatenated file data
         - .FileName -- concatenated file name
	
- Return to the calling use case

## 🔗 Connections (1)

- ← Dependency: [[13.200 Generate Contract Supplement Documents]]
