---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1822191
diagrams: 6
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Files

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

Entity representing the list of individual logically-grouped files (e.g. document content) related to some particular entity (based on the used context - e.g. client document).

## 🔗 Connections (6)

- ← Dependency: [[Document (Class 1768268)]]
- ← Dependency: [[Document (Class 1820104)]]
- ← Dependency: [[{DEL}DocumentFiles]]
- ← Dependency: [[{DEL}DocumentUpload]]
- ← Dependency: [[{DEL}GetDocumentContentResponse]]
- → Dependency: [[File (Class 1822193)]]

## 📊 Appears In (6 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile
- Logical: Application
- Logical: Document

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| file | File |  |
