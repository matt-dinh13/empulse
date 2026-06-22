---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1870135
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Generate Document printout (SUP) - REST

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CSI-3415 /}
This rule describes the steps, how system generates the printout file for selected document(s) in the PrintServer (REST API version).

Input:

	
- Document [1..n] -- object of respective document to print
- DocumentExternalId  -- Document identifier
- DataSource -- data source XML to be used for particular document when generating its printout file
- PrintoutTemplateCode -- code of a template to be used for the printout file generated for particular document
- PrintoutFileName (optional) -- name to be used for the printout file generated for particular document
- NumberOfDocumentCopies (optional) -- number of copies to be applied for particular document when generating the concatenated printout
	
- ReportType -- SINGLE, CONCATENATE, BOTH
	
- ConcatenatedFileName (optional) - mandatory if ReportType = BOTH or CONCATENATE
	
- CollatedCopies (optional) -- indication (boolean), whether the individual sub-parts of concatenated printout output should be collated (e.g. A, B, C, A, B, C) or non-collated (e.g. A, A, B, B, C, C) when multiple copies are requested for any document


Output:

	
- SingleDocumentPrintoutFile [0..n] = printout file generated for each single document separately
	
- ConcatenatedDocumentPrintoutFile [0..1] = printout file constructed by concatenating the individual documents together
	
- ErrorCode (optional) = code of the respective error, that caused the printout generating to fail



	
- System sets up items for print. Each Document to print is presented as one item:
- templateCode = PrintoutTemplateCode 
- dataId = DocumentExternalId
- data = DataSource
- fileName = PrintoutFileName 
- copyCount =  NumberOfDocumentCopies
	
- System set up the request body as follow:
- systemId = SUP/HO ??
- actor =  ID of the currently logged user
- reportType = ReportType
- outputFormat = PDF
- concatenatedParams = {fileName = ConcatenatedFileName, collated = CollatedCopies} -- parameters for the concatenated document
- items [1....N] = items --array of itemt to print
	
- System calls POST https://psrv.<environment>/printserver/rest/v1/reports with parameters:
- body
	
- If calling the service fails due to any reason, the process ends with respective ErrorCode returned on the output.
	
- System takes each received printout file from the response and returns them to the calling object as following outputs:
- ConcatenatedDocumentPrintoutFile [0..1] = concatenated.item
- SingleDocumentPrintoutFile [0..n] = items -- ResponseItem data
which contains ResponseItem data:
- dataId --
- data
- fileName
- requestId
