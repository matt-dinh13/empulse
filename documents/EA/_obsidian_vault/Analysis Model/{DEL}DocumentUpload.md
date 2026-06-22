---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820649
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}DocumentUpload

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}
Entity representing the particular document being uploaded.

## 🔗 Connections (3)

- → Dependency: [[File]]
- → Dependency: [[Files]]
- ← Dependency: [[{DEL}UploadDocumentFileRequest]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| files | Files |  |
