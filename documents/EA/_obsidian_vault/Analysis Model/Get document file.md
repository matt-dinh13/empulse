---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/UseCase Model - Fill in application"
domain: "Analysis Model"
element_id: 1822797
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Get document file

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/UseCase Model - Fill in application

## 📝 Notes

This element describes the algorithm of how system gets the file for respective instance of a document.

Input:

	
- Document - object of a document
	
- FileType - type of the requested document file [Content/Printout]


Output:

	
- Result - result of the operation for getting the document file [success/failure]
	
- DocumentFile (optional) - respective document file


Steps:

	
- System takes the Document received on the input and gets its file (of respective FileType) based on the type of such document object accordingly:

a) TempAppl_Document - if available, system gets the content of the document from TempAppl_Document->TempAppl_DMS_File->DMS_file.Content //Printout FileType is not supported for TempAppl_Document.

b) Contract Document / Client Document / DDM Document - in case the respective document file was previously uploaded/generated and corresponding [FileType]DMS_File therefore exists, system checks, whether such document file has been already uploaded to Cabinet or not, and then gets the file itself as follows:
- If [FileType]DMS_File.Upload_In_Progress_Flag = TRUE, system gets the file directly from DMS_File.Content.
   Note for FileType = Content: system uses relation Document->Document_DMS_File->DMS_file 
- Otherwise system gets the document file from Cabinet by calling the use case 01.008 Download file from document archive. If the use case execution fails due to any reason (e.g. some error occurs, response is not sent etc.), system returns failure as a Result and algorithm ends.
	
- System returns success as a Result and obtained document file (DocumentFile). Algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[01.335 Get agreement documentation externally (UseCase 1819522)]]
- ← Dependency: [[01.055 Send person photo for face recognition processing (UseCase 1821365)]]
- → Dependency: [[01.008 Download file from document archive (UseCase 1851467)]]

## 📊 Appears In (1 diagrams)

- Use Case: Fill in application
