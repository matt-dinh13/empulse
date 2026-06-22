---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-14943 (CSI-1040) Support for merged files"
domain: "Modules"
element_id: 1724632
diagrams: 6
connections: 2
tags:
  - class
  - modules
---

# 🔷 DocumentFile

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-14943 (CSI-1040) Support for merged files

## 📝 Notes

Structure for Document file (DMSFile) definition including localization

## 🔗 Connections (2)

- ← Dependency: [[DocumentFiles (Class 1656625)]]
- ← Dependency: [[Document (Class 1880027)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-14943 (CSI-1040) Support for merged files
- Logical: COMMON for Interface Model
- Logical: CreateDocument
- Logical: CreateDocumentFile
- Logical: FindDocument
- Logical: GetDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| fileTypeCode | string |  |
| pageSpecificationCode | string |  |
| pageSpecificationName | string |  |
| {ADD}mergedFile | boolean |  |
| fileUuid | string |  |
