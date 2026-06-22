---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1822199
diagrams: 6
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ValidationErrors

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

List of validation errors

## 🔗 Connections (5)

- ← Dependency: [[{DEL}ProcessDocumentFault]]
- → NoteLink: [[Common _ValidationErrors (Boundary 1822205)]]
- → NoteLink: [[Common _ValidationErrors]]
- → Dependency: [[ValidationError (Class 1822198)]]
- ← Dependency: [[FaultBase (Class 1822197)]]

## 📊 Appears In (6 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile
- Logical: Common
- Logical: ValidationErrors

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validationError | ValidationError |  |
