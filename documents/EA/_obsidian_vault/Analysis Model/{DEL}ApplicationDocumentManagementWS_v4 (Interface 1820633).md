---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820633
diagrams: 5
connections: 20
tags:
  - interface
  - analysis-model
---

# 🔶 {DEL}ApplicationDocumentManagementWS_v4

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}
Service for various operations with documents related to a particular application.

## 🔗 Connections (16)

- → Dependency: [[{DEL}01.174 Update document]]
- → Dependency: [[{DEL}UploadDocumentFileResponse]]
- → Dependency: [[{DEL}CreateDocumentResponse]]
- → Dependency: [[{DEL}UpdateDocumentFault]]
- → Dependency: [[{DEL}01.179 Upload document file]]
- → Dependency: [[{DEL}UpdateDocumentResponse]]
- → Dependency: [[{DEL}UploadDocumentFileRequest]]
- → Realisation: [[{DEL}01.169 Get document content]]
- → Dependency: [[{DEL}UploadDocumentFileFault]]
- → Dependency: [[{DEL}CreateDocumentFault]]
- → Dependency: [[{DEL}GetDocumentContentRequest]]
- → Dependency: [[{DEL}GetDocumentContentResponse]]
- → Dependency: [[{DEL}CreateDocumentRequest]]
- → Dependency: [[{DEL}01.176 Create document]]
- → Dependency: [[{DEL}GetDocumentContentFault]]
- → Dependency: [[{DEL}UpdateDocumentRequest]]

## 📊 Appears In (5 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile
