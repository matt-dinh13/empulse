---
type: Class
stereotype: "XSDsimpleType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820651
diagrams: 4
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ProcessResultCode

> **Type**: Class · **Stereotype**: «XSDsimpleType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}
List of failure result codes for the document update.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}ProcessDocumentFault]]

## 📊 Appears In (4 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| INVALID_APPLICATION_CODE |  |  |
| INSUFFICIENT_PRIVILEGE |  |  |
| INVALID_APPLICATION_STATUS |  |  |
| INVALID_DOCUMENT_UUID |  |  |
| INVALID_DOCUMENT_DATA |  |  |
| COMMUNICATION_FAILED |  |  |
