---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820650
diagrams: 4
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ProcessDocumentFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}

## 🔗 Connections (6)

- → Dependency: [[ValidationErrors (Class 1822199)]]
- → Dependency: [[{DEL}ProcessResultCode]]
- ← Generalization: [[{DEL}GetDocumentContentFault]]
- ← Generalization: [[{DEL}CreateDocumentFault]]
- ← Generalization: [[{DEL}UpdateDocumentFault]]
- ← Generalization: [[{DEL}UploadDocumentFileFault]]

## 📊 Appears In (4 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | {DEL}ProcessResultCode |  |
| validationErrors | ValidationErrors |  |
